module.exports = {
  apps: [{
    name: 'API',
    script: 'server/bin/www',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 8000,
      REACT_APP_DB_PASSWORD: "blueocean",
      REACT_APP_MAP_API_KEY: "AIzaSyCCfCmDK40nk_TGorhD4rZLKSxEdJ_rNHA"
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 8000,
      REACT_APP_DB_PASSWORD: "blueocean",
      REACT_APP_MAP_API_KEY: "AIzaSyCCfCmDK40nk_TGorhD4rZLKSxEdJ_rNHA"
    }
  }],

  deploy: {
    production: {
      user: 'node',
      host: '212.83.163.1',
      ref: 'origin/master',
      repo: 'git@github.com:repo.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};