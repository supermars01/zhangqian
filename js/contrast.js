$(function(){
	
	
	
	$(".caption a").click(function(){
		if($(".caption a[class='on']").length >3){
			alert("最多只能选择四个！");
			return false;
		}
		if($(this).attr("class") != "on"){
			$(this).addClass("on");
		}else{
			$(this).removeClass("on");
		}
	})
	
	$(".contrast_a").click(function(){
		
		$(".caption a").each(function(i){
			
			if($(".caption a[class='on']").length >= 2){
				$(".validate").css("display","block");
			}
			
		})
		
	})
	$(".close").click(function(){
		$(".validate").css("display","none");
	})
	

})
