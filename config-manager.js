const path = require('path');
const fs = require('fs');

function getConfigPath() {
  return process.env.NODE_ENV === 'production'
    ? path.join(path.dirname(process.execPath), 'config.js')
    : path.resolve(__dirname, 'config.js');
}

function loadConfig() {
  const configPath = getConfigPath();
  delete require.cache[require.resolve(configPath)];
  return require(configPath).CONFIG;
}

function saveConfig(newConfig) {
  const configPath = getConfigPath();
  const configContent = `// 客户端配置文件\n\nexport const CONFIG = ${JSON.stringify(newConfig, null, 2)};`;
  fs.writeFileSync(configPath, configContent, 'utf8');
}

module.exports = { loadConfig, saveConfig };