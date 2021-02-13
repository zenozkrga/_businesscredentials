
FROM node:dubnium-alpine as serverless
RUN mkdir -p /opt/workspace/src/client
WORKDIR /opt/workspace
# Copy over Serverless components
COPY package-lock.json package.json /opt/workspace/
RUN apk update && apk upgrade &&  apk add ca-certificates && update-ca-certificates
RUN apk add --no-cache --virtual .build-deps \
    git \
    && npm install \
    && npm install --save serverless-finch \
    && npm install --save-dev serverless-dynamodb-pitr \
    && npm install --save serverless-plugin-log-retention \
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
