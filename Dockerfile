
FROM node:alpine as builder
RUN mkdir -p /opt/workspace/src/js
WORKDIR /opt/workspace
# Copy over Serverless components
COPY webpack.config.js package-lock.json package.json /opt/workspace/
COPY . /opt/workspace/scr/
RUN apk update && apk upgrade &&  apk add ca-certificates && update-ca-certificates
RUN apk add --no-cache --virtual .build-deps \
    git \
    && npm install \
  	&& find /usr/local \
        \( -type d -a -name test -o -name tests \) \
        -o \( -type f -a -name '*.pyc' -o -name '*.pyo' \) \
        -exec rm -rf '{}' + \
    && runDeps="$( \
        scanelf --needed --nobanner --recursive /usr/local \
                | awk '{ gsub(/,/, "\nso:", $2); print "so:" $2 }' \
                | sort -u \
                | xargs -r apk info --installed \
                | sort -u \
    )" \
    && apk add --virtual .rundeps $runDeps

FROM nginx:alpine as nginx
WORKDIR /op/workspace
COPY --from=builder /opt/workspace/src /usr/share/nginx/html
COPY --from=builder /opt/workspace/ /usr/share/nginx/html
