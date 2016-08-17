define(function( require, exports, module ){
	
	var $ = require("jquery");
	var dian = require("module/dian");
	var swiper = require("swiper.jquery");
	console.log(new swiper())
	this.name = "aaa";
	
	dian.chapai();
	exports.showTVname = function(){
		$( ".tvBox" ).text(name);
	}
	
	
	
})
