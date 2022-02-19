FROM sgs/webnote

WORKDIR /usr/share/nginx/html/

MAINTAINER webnote

ENV TIME_ZONE=Asia/Shanghai

RUN ln -snf /usr/share/zoneinfo/$TIME_ZONE /etc/localtime && echo $TIME_ZONE > /etc/timezone

EXPOSE 80