FROM node:10

WORKDIR /usr/src/app/
COPY package*.json /usr/src/app/
RUN npm install
COPY . /usr/src/app/

# RPC pass and username is necessary
# specify it with --build-arg docker command
ARG RPC_USER
RUN test -n "$RPC_USER"
ENV RPC_USER $RPC_USER

ARG RPC_PASS
RUN test -n "$RPC_PASS"
ENV RPC_PASS $RPC_PASS

ENV REDIS_HOST 127.0.0.1
ENV REDIS_PORT 6379
# uzlocoind host must be specified with protocol
ENV UZLOCOIND_HOST http://127.0.0.1
ENV UZLOCOIND_PORT 6331
ENV UZLOCOIND_RPC_PORT 6334
ENV UZLOCOIND_WEB_PORT 80

EXPOSE 80

CMD npm start
