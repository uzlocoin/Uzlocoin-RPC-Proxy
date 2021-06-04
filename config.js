module.exports = {
    redis_host: process.env.REDIS_HOST != null ? process.env.REDIS_HOST : '127.0.0.1',
    redis_port: process.env.REDIS_PORT != null ? process.env.REDIS_PORT : 6379,
    web_host: process.env.WEB_HOST != null ? process.env.WEB_HOST : 'http://127.0.0.1',
    web_port: process.env.WEB_PORT != null ? process.env.WEB_PORT : 80,
    uzlocoind_host: process.env.UZLOCOIND_HOST != null ? process.env.UZLOCOIND_HOST : 'http://127.0.0.1',
    uzlocoind_con_port: process.env.UZLOCOIND_PORT != null ? process.env.UZLOCOIND_PORT : 6331,
    uzlocoind_rpc_port: process.env.UZLOCOIND_RPC_PORT != null ? process.env.UZLOCOIND_RPC_PORT : 6334,
    uzlocoind_rpc_path: process.env.UZLOCOIND_RPC_PATH != null ? process.env.UZLOCOIND_RPC_PATH : "/rpc",
    rpc_user: process.env.RPC_USER,
    rpc_pass: process.env.RPC_PASS,
};
