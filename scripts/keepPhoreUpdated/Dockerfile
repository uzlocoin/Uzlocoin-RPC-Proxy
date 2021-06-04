# To start that docker file use
# docker build -t keep_uzlocoin_updated .
# docker run -v LOCAL_BACKUP_DIR:/data/backup_dir -t keep_uzlocoin_updated
FROM node:10

# RPC pass and username is necessary
# specify it with --build-arg docker command
ARG RPC_USER
RUN test -n "$RPC_USER"
ENV RPC_USER $RPC_USER

ARG RPC_PASS
RUN test -n "$RPC_PASS"
ENV RPC_PASS $RPC_PASS

WORKDIR /usr/src/app/
COPY package*.json /usr/src/app/
RUN npm install
COPY . /usr/src/app/

ARG BINARY_URL_FILE='binary_url_file'
ENV BINARY_URL_FILE=$BINARY_URL_FILE
# Download and unpack latest Uzlocoin linux binary
RUN curl -s https://api.github.com/repos/uzlocoinproject/Uzlocoin/releases/latest \
      | grep browser_download_url \
      | grep x86_64-linux-gnu \
      | cut -d '"' -f 4 > $BINARY_URL_FILE
RUN wget -O uzlocoin.tar.gz -i $BINARY_URL_FILE
RUN mkdir uzlocoind
RUN tar -xzf uzlocoin.tar.gz -C uzlocoind --strip-components=1

RUN mkdir /root/.uzlocoin/
RUN mkdir -p /data/backup_dir

ENV UZLOCOIN_CLI ./uzlocoind/bin/uzlocoin-cli
ENV UZLOCOIND_EXEC ./uzlocoind/bin/uzlocoind
ENV UZLOCOIND_DATA_DIR /root/.uzlocoin/
ENV UZLOCOIND_BACKUP_DIR /data/backup_dir

EXPOSE 6331

CMD npm start
