$(function(){
    $(".nav > ul > li").mouseover(function(){        
        $(this).find(".submenu").stop().slideDown();  
    });

    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    });

    // 이미지 슬라이드
    let currentIndex = 0;
    const $sliderWrap = $("#main .sliderWrap");    
    const $slider = $("#main .sliderWrap .slider");
    const $sliderHeight = $slider.height();
    $sliderWrap.append($slider.first().clone(true));

    setInterval(function(){
        currentIndex++;
        $sliderWrap.animate({
            marginTop: -$sliderHeight * currentIndex
        },350)

        if(currentIndex === $slider.length){
            setTimeout(function(){
                $sliderWrap.animate({marginTop: 0},0);
                currentIndex = 0;
            }, );
        }
    }, 3000);

    // 팝업
    $(".popup-btn").click(function(){
        $(".popup-view").show();
    })
    $(".popup-close").click(function(){
        $(".popup-view").hide();
    })
});
