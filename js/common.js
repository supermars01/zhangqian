

$(function(){
	//公共选项卡切换
	$(".tab_list").each(function(q){
		$(".tab_list").eq(q).find(".tab_a").each(function(e){
			$(this).mouseenter(function(){
				$(".tab_list").eq(q).find(".tab_a").removeClass("on")
				$(this).addClass("on")
				$(".tab_list").eq(q).find(".tab_b").hide()
				$(".tab_list").eq(q).find(".tab_b").eq(e).show()
			})
			
		})	
		$(".tab_list").eq(q).find(".tab_a").eq(0).mouseenter();
	})
	
	//
	
	$(".tab_click").each(function(q){
		$(".tab_click").eq(q).find(".tab_a").each(function(e){
			$(this).click(function(){

				$(".tab_click").eq(q).find(".tab_a").removeClass("on")
				$(this).addClass("on")
				$(".tab_click").eq(q).find(".tab_b").hide()
				$(".tab_click").eq(q).find(".tab_b").eq(e).show()
			})
			
		})	
		$(".tab_click").eq(q).find(".tab_a").eq(0).click();
	})
	//
			
});



//海外移民
$(document).ready(function(){
	$(".emigrantsyc ul li").bind("mouseenter",function(){
		$as = $(".emigrantsyc ul li").index($(this));
		$(".emigrantsyc ul li .sbfaq").eq($as).stop().animate({top:'80'});
		//$(".sbfaq").animate({top:'80'});
	}).bind("mouseleave",function(){
		$as = $(".emigrantsyc ul li").index($(this));
		$(".emigrantsyc ul li .sbfaq").eq($as).stop().animate({top:'180'});
	});
});

//海外移民
$(document).ready(function(){
	$(".lvyouc ul li").bind("mouseenter",function(){
		$as = $(".lvyouc ul li").index($(this));
		$(".lvyouc ul li .sbfaq").eq($as).stop().animate({top:'80'});
		//$(".sbfaq").animate({top:'80'});
	}).bind("mouseleave",function(){
		$as = $(".lvyouc ul li").index($(this));
		$(".lvyouc ul li .sbfaq").eq($as).stop().animate({top:'180'});
	});
});
$(document).ready(function(){
	$(".lvyxuc ul li").bind("mouseenter",function(){
		$as = $(".lvyxuc ul li").index($(this));
		$(".lvyxuc ul li .sbfaq").eq($as).stop().animate({top:'80'});
		//$(".sbfaq").animate({top:'80'});
	}).bind("mouseleave",function(){
		$as = $(".lvyxuc ul li").index($(this));
		$(".lvyxuc ul li .sbfaq").eq($as).stop().animate({top:'180'});
	});
});








$(function(){
	$(".fee .ga font").click(function(){
		$(".ga .gga").toggle();
		});
	$(".fee .gb font").click(function(){
		$(".gb .ggb").toggle();
		});
	});


$(function(){
	
	
	
	//立即注册
	$("#zu").click(function(){
		$(".hydl").fadeOut();
		$(".hyzc").fadeIn();
		$("#go2").fadeIn();
	})
	
	$(".cha").click(function(){
		$(".hydl").fadeOut();
		$("#go2").fadeOut();
		
		$(".grmmzh").fadeOut();	
		$(".sjmmzh").fadeOut();			
	})
	
	
	//立即登录
	$("#dg").click(function(){
		$(".hyzc").fadeOut();
		$(".hydl").fadeIn();
		$("#go2").fadeIn();
	})
	
	
	$(".cha2").click(function(){
		$(".hyzc").fadeOut();
		$("#go2").fadeOut();
		
		$(".grmmzh").fadeOut();	
		$(".sjmmzh").fadeOut();		
	})
	
});


$(function(){
	
	
	
	//马上注册
	$(".mszc").click(function(){
		$(".hydl").fadeOut();
		$(".hyzc").fadeIn();
		$("#go2").fadeIn();
	})

	
	
	//马上登录
	$(".msdl").click(function(){
		$(".hyzc").fadeOut();
		$(".hydl").fadeIn();
		$("#go2").fadeIn();
		$(".sjmmzh").fadeOut();
		$(".grmmzh").fadeOut();
	})
	
	
});
/*背景变灰色*/
	$("#go2").css({
		height: function () {
			return $(document).height()+340;
		},
		width:"100%"
	});
	function closego(){
		$("#go2").hide();
		$("#updatemsg").hide();
	}



	

	
	



//注册登录弹出
