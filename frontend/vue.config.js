module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy:"https://server-meraki.vercel.app", 
  }
}
