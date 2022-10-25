module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy:{
      '^/api': {
        target: 'https://server-meraki.vercel.app/',
        ws: true,
        changeOrigin: true
    }, 
  },
},
}
