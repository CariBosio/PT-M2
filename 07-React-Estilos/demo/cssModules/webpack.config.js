module.exports = {
  entry: './app.js', // ruta al entry point
  output: {
    path: __dirname + '/dist', // path donde webpack dejarǻ los archivos.
    filename: 'bundle.js', // archivo del bundle
  },
  module: {
    rules: [
             {
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         use: {
           loader: 'babel-loader',  //le aplica babel
           options: {
             presets: ['@babel/preset-react', '@babel/preset-env']
           }
         }
       },
       {
        // css modules
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",  //le aplica ccs-loader
            options: 
              {
                modules: {
                  localIdentName: "[local]___[hash:base64:5]"  //le coloca el nombre de la clase y un hash
                }
              }
          }
        ]
      },{
        // global
        test: /\.gcss$/,
        use: ['style-loader', 'css-loader'], // le aplica style-loader y css-loader
      },
    ],
  },
};
