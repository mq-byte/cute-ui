const inputUrl:string = process.env.tagert_file === 'lib' ? './src/index.ts' : './src/main.ts';

// --module esnext system

module.exports = {
  rollupInputOptions: {
    // input: import.meta.env.VITE_INPUT_FILE,
    input: inputUrl,
  },
  rollupOutputOptions: {
    file: './cute.js',
  },
};
