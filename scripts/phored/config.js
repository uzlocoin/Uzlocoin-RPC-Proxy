module.exports = {
    // obligatory parameters
    rpc_user: process.env.RPC_USER,
    rpc_pass: process.env.RPC_PASS,

    // normal parameters
    redis_host: process.env.REDIS_HOST != null ? process.env.REDIS_HOST : '127.0.0.1',
    redis_port: process.env.REDIS_PORT != null ? process.env.REDIS_PORT : 6379,
    backup_S3_dir: process.env.UZLOCOIND_BACKUP_S3_DIR != null ? process.env.UZLOCOIND_BACKUP_S3_DIR : 'uzlocoind-db-backup',
    backup_S3_region: process.env.UZLOCOIND_BACKUP_S3_REGION != null ? process.env.UZLOCOIND_BACKUP_S3_REGION : 'us-east-1',
    backup_config_S3_file: process.env.UZLOCOIND_BACKUP_S3_INFO != null ? process.env.UZLOCOIND_BACKUP_S3_INFO : 'newest_prefix',
    uzlocoind_data_dir: process.env.UZLOCOIND_DATA_DIR != null ? process.env.UZLOCOIND_DATA_DIR : '/root/.uzlocoin',
    start_from_beginning: process.env.START_FROM_BEGINNING != null ? process.env.START_FROM_BEGINNING : false,
    uzlocoind_host: process.env.UZLOCOIND_HOST != null ? process.env.UZLOCOIND_HOST : 'http://127.0.0.1',
    uzlocoind_con_port: process.env.UZLOCOIND_PORT != null ? process.env.UZLOCOIND_PORT : 6331,
    uzlocoind_rpc_port: process.env.UZLOCOIND_RPC_PORT != null ? process.env.UZLOCOIND_RPC_PORT : 6334,
    uzlocoind_rpc_path: process.env.UZLOCOIND_RPC_PATH != null ? process.env.UZLOCOIND_RPC_PATH : "",
    uzlocoind_web_port: process.env.UZLOCOIND_WEB_PORT != null ? process.env.UZLOCOIND_WEB_PORT : 80,
};
