const path = require("path");

module.exports = {
  entry: "./src/App.jsx", // Путь к вашему React-файлу (точка входа)
  output: {
    path: path.resolve(__dirname, "dist"), // Путь, куда будет сгенерирован итоговый JavaScript файл
    filename: "react.js", // Имя итогового JavaScript файла
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"], // Настройка Babel для поддержки JSX
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"), // Директория для раздачи статических файлов
    port: 8080, // Порт для запуска dev-сервера
  },
};
