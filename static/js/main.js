define(function(require, exports, module) {

  // 通过 require 引入依赖
  var tv = require('./module/tv');
  
  
  
  exports.show = function(){
  	tv.showTVname();
  }
  
  
});

