const os = require("os");
module.exports = {
  apps: [
    {
      name: "failing-api",
      script: "./src/index.js",
      instances: 2,
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "750M",
      log_date_format: "YYYY/MM/DD HH:mm:ss",
      env: {
        NODE_ENV: "production",
        ENV: "development",
        INSTANCE: os.hostname(),
      },
    },
  ],
};
