

module.exports = {
	devServer: {
    proxy: 'http://localhost:8001',
    open:true
  },


   configureWebpack: {
   resolve: {
    extensions: ['*', '.js', '.json', '.vue', '.scss', '.css']
},
 
 
  }

}
 