$(function(){
    // 메뉴
    $(".nav > ul > li").mouseover(function(){        
        $(".submenu").stop().fadeIn();  
        $("#main").addClass("on");  
    });
    $(".nav > ul > li").mouseout(function(){
        $(".submenu").stop().fadeOut();
        $("#main").removeClass("on");  
    });

    // 이미지 슬라이드
    let currentIndex = 0;
    
    const $sliderWrap = $(".slider__wrap");
    const $slider = $(".slider__wrap .slider");
    const $sliderHeight = $slider.height();
    $sliderWrap.append($slider.first().clone(true));
    
    setInterval(function(){
        currentIndex++;
        $sliderWrap.animate({
            marginTop: -$sliderHeight * currentIndex
        },350);

        if(currentIndex === $slider.length){
            setTimeout(function(){
                $sliderWrap.animate({marginTop: 0},0);
                currentIndex = 0;
            }, );
        }
    }, 4000);

    // 탭 메뉴
    let tabBtn = $(".tab-btn > ul > li");
    let tabCont = $(".tab-cont > ul");
    tabCont.hide().eq(0).show();

    tabBtn.click(function(){
        const index = $(this).index();
        // alert(index);

        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();
    });

    // 레이어 팝업
    $(".popup-btn").click(function(){
        $(".popup-view").show();
    })
    $(".popup-close").click(function(){
        $(".popup-view").hide();
    })
});