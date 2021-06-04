module.exports = {
    uzlocoind_exec: process.env.UZLOCOIND_EXEC != null ? process.env.UZLOCOIND_EXEC : './uzlocoind',
    uzlocoin_cli: process.env.UZLOCOIN_CLI != null ? process.env.UZLOCOIN_CLI : './uzlocoin-cli',
    backup_S3_dir: process.env.UZLOCOIND_BACKUP_S3_DIR != null ? process.env.UZLOCOIND_BACKUP_S3_DIR : 'uzlocoind-db-backup',
    backup_S3_region: process.env.AWS_DEFAULT_REGION != null ? process.env.AWS_DEFAULT_REGION : 'us-east-1',
    backup_config_S3_file: process.env.UZLOCOIND_BACKUP_S3_INFO != null ? process.env.UZLOCOIND_BACKUP_S3_INFO : 'newest_prefix',
    uzlocoind_data_dir: process.env.UZLOCOIND_DATA_DIR != null ? process.env.UZLOCOIND_DATA_DIR : '/root/.uzlocoin',
    start_from_beginning: process.env.START_FROM_BEGINNING != null ? process.env.START_FROM_BEGINNING : false,
    binary_url_file: process.env.BINARY_URL_FILE,

    // in minutes
    keep_backup_for: process.env.KEEP_BACKUP_FOR != null ? process.env.KEEP_BACKUP_FOR : 60 * 48, // 48h
    create_backup_every: process.env.CREATE_SNAPSHOT_EVERY != null ? process.env.CREATE_SNAPSHOT_EVERY : 60 * 3, // 3h

    //RPC user and pass for container local instance of uzlocoind. This uzlocoind instance should never be available
    //from the public or even other containers. Obligatory parameters.
    rpc_user: process.env.RPC_USER,
    rpc_pass: process.env.RPC_PASS,
};
