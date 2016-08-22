var webpack=require('webpack');
var path=require('path');

module.exports={
    entry:{
      app:'app.js'
    },
    output:{
        path:path.join(__dirname,bundle,js),
        filename:'[name].js'
    }
}