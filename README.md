# exam-maker

## What is this

TODO: 非エンジニアでも概要がわかるように書く


## Getting Started

開発サーバーを立ち上げる際は、以下のコマンドを実行してください。
※ 事前にホストで `pnpm` コマンドのインストールが必要です。node等のバージョンは [package.json](./package.json) の `engines` プロパティを参照してください。 

```bash
pnpm i

pnpm dev
```

[http://localhost:3000](http://localhost:3000) でサイトが立ち上がります。

Liffアプリのテストを行う際は、ngrokでポートを開放する必要があります。以下のコマンドで開放できます。
※ 事前にホストに `ngrok` コマンドのインストールが必要です。

```bash
pnpm ngrok
```

## Deploy

TODO: デプロイ先の選定と仕組みを整えて手順を書く

## System

TODO: システムの概要を書く

## Data structure, datastore

TODO: データ保存先と内部の構造を書く

データストアは SQliteを使用しています。
また、スキーマ定義とORMに Prisma を使っています。
ホスト側に `sqlite3` コマンドのインストールを推奨します。
ターミナルで以下のコマンドを実行するとデータベース内部を確認できます。

```bash
# リポジトリ直下で実行
sqlite3 prisma/sqlite.db
```

```sqlite3
.tables # テーブル一覧を表示
.schema users # `users` テーブルの構成を表示
.exit # コンソールを終了
```

### 開発データの投入

以下のコマンドの実行で、開発用のデータが投入できます。
```bash
pnpm prisma:seed
```

### テーブル構成を変更するときの流れ

以下の手順で開発します。

1. テーブル構成を設計する
2. prisma/schema.prisma ファイルを修正する
3. `pnpm prisma:format` を実行する
3. `pnpm prisma:migrate` を実行する
4. プログラム側を修正する
5. 必要に応じて、 `prisma/seed.ts` ファイルにテストデータを列挙する
4. 変更内容をコミットする


## Documents

TODO: API仕様や画面の役割などを書く
