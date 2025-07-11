module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@constants': './src/constants',
          '@components': './src/components',
          '@screens': './src/screens',
          '@types': './src/types',
          '@navigations': './src/navigations',
          '@utils': './src/utils',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
