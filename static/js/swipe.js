;(function($){
	var idx=0,
		len=$(".page").size();
		
	//上下滑动 事件
	$(".continer").on("swipeUp",function(){
		
		idx++;
		if(idx>=len) idx=len-1;		
		$(".page").eq(idx).prev().css({
			"transform":"translate3d(0,-100%,0)",
			"transition":"transform .4s"
		})	
		
       //向下滑动
	}).on("swipeDown",function(){
		
		idx--;
		if(idx<0)idx=0;
		$(".page").eq(idx).css({
			"transform":"translate3d(0,0,0)",
			"transition":"transform .4s"
		})
		
		
	})
	
})(Zepto)