$(function(){
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    });

    // 슬라이드
    let currentIndex = 0;
    const $sliderWrap = $("#main .sliderWrap");    //이미지 부모
    const $slider = $("#main .sliderWrap .slider");            //각각의 이미지
    const $sliderHeight = $slider.height();     //이미지 세로값
    $sliderWrap.append($slider.first().clone(true));    // 첫번째 이미지 복사 마지막에 추가

    setInterval(function(){
        currentIndex++;             // 현재 이미지를 1씩 증가
        $sliderWrap.animate({marginTop: -$sliderHeight * currentIndex}, 350);

        if(currentIndex === $slider.length){
            setTimeout(function(){
                $sliderWrap.animate({marginTop: 0},0);
                currentIndex = 0;
            }, );
        }

    },3000);
});