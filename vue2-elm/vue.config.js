

module.exports = {
	devServer: {
    proxy: 'http://localhost:8002',
    open:true
  },


   configureWebpack: {
   resolve: {
    extensions: ['*', '.js', '.json', '.vue', '.scss', '.css']
},
 
 
  }

}
 