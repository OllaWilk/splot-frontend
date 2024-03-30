module.exports = {
  // pozostała konfiguracja...
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // dodaje style do DOM
          {
            loader: 'css-loader', // tłumaczy CSS na CommonJS
            options: {
              modules: true, // włącza moduły CSS
              localIdentName: '[name]__[local]___[hash:base64:5]', // definiuje nazewnictwo klas
            },
          },
          'sass-loader', // kompiluje Sass do CSS
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  // pozostała konfiguracja...
};
