const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = new JavaScriptObfuscator({
  compact: true,
  controlFlowFlattening: false,
  deadCodeInjection: false,
  debugProtection: false,
  debugProtectionInterval: 0,
  disableConsoleOutput: false,
  identifierNamesGenerator: 'hexadecimal',
  log: false,
  renameGlobals: false,
  rotateStringArray: true,
  selfDefending: false,
  shuffleStringArray: true,
  splitStrings: false,
  stringArray: false,
  stringArrayEncoding: ['none'],
  stringArrayThreshold: 0.75,
  unicodeEscapeSequence: false
});