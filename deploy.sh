#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:sgshy1995/webnote.git master:gh-pages

cd -

# 部署到服务器
scp -r docs/.vuepress/dist root@aliyun:/var/www/webnote &
scp -r docker root@aliyun:/var/www/webnote &
ssh root@aliyun "cd /var/www/webnote/docker;docker-compose stop || true;docker-compose down || true;docker-compose build;docker-compose up -d"