module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy:"http://server-meraki.vercel.app/", 
  }
}
