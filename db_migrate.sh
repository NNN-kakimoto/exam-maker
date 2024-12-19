#!/bin/sh
set -e

# コンテナ起動時に持っているSQLiteのデータベースファイルは、
# 後続処理でリストアに成功したら削除したいので、リネームしておく
if [ -f ./prisma/sqlite.db ]; then
  mv ./prisma/sqlite.db ./prisma/sqlite.db.bk
fi

# Cloud Storage からリストア
litestream restore -if-replica-exists -config ./litestream.yaml ./prisma/sqlite.db

if [ -f ./prisma/sqlite.db ]; then
  # リストアに成功したら、リネームしていたファイルを削除
  echo "---- Restored from Cloud Storage ----"
  rm ./prisma/sqlite.db.bk
else
  # 初回起動時にはレプリカが未作成であり、リストアに失敗するので、
  # その場合には、冒頭でリネームしたdbファイルを元の名前に戻す
  echo "---- Failed to restore from Cloud Storage ----"
  mv ./prisma/sqlite.db.bk ./prisma/sqlite.db
fi

npm run prisma:migrate && npm run prisma:seed

# litestreamによるレプリケーション
litestream replicate -config ./litestream.yaml
