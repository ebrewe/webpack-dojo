module.exports = {
    entry: './src/main.js',
    output: {
      path: 'dist',
      filename: 'bundle.js'
    },
    module:{
      loaders:[
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'babel',
          query:{
            presets: ['es2015', 'react']
          }
        },
        /*{
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }*/
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
        },
        {
          test:/\.(png|jpg)$/,
          loader: 'url-loader?limit=20000'
        }
      ]
    }
};
