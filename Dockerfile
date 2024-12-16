FROM node:22-alpine AS builder

RUN apk add --no-cache libc6-compat
RUN apk add sqlite-dev
ADD https://github.com/benbjohnson/litestream/releases/download/v0.3.13/litestream-v0.3.13-linux-arm64.tar.gz /tmp/litestream.tar.gz
RUN tar -C /usr/local/bin -xzf /tmp/litestream.tar.gz
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED 1
## 先にpackage.jsonをコピーしてインストールすることで、キャッシュを活用する 
COPY package.json package-lock.json pnpm-lock.yaml ./
## pnpm コマンドを使えるようにしたい
RUN npm install
COPY . ./
RUN npm run build

FROM node:22-alpine AS runner

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
COPY --from=builder /app/next.config.ts next.config.ts
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/package-lock.json package-lock.json
COPY --from=builder /app/pnpm-lock.yaml pnpm-lock.yaml
RUN mkdir prisma && touch prisma/sqlite.db
COPY --from=builder /app/litestream.yaml litestream.yaml
COPY --from=builder /usr/local/bin/litestream /usr/local/bin/litestream
COPY --from=builder /app/entrypoint.sh entrypoint.sh

CMD [ "./entrypoint.sh" ]
