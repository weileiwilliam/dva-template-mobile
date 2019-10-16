module.exports = {
  plugins: [
    require('autoprefixer')({
      'browsers': ['cover 99.5%']
    }),
    require('postcss-pxtorem')({
      rootValue: 100,
      propWhiteList: []
    })
  ]
}
