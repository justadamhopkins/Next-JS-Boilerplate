const path = require('path');
const fs = require('fs');

const BUILD_ENV =
  process.env.BUILD_ENV || process.env.REACT_APP_BUILD_ENV || 'production';
const CONFIG_FILE_PATH = path.resolve(__dirname, `./env/.env.${BUILD_ENV}`);

console.info(`⚙️  Public Config file: ${CONFIG_FILE_PATH}`);

try {
  fs.statSync(CONFIG_FILE_PATH);
} catch (e) {
  console.info(
    `> Config file for environment not found at ${CONFIG_FILE_PATH}`
  );
  process.exit(1);
}

const { parsed: env } = require('dotenv').config({
  path: CONFIG_FILE_PATH,
});

// Pass our BUILD_ENV through
env.BUILD_ENV = BUILD_ENV;

module.exports = env;
