function start(){
    //운영체제
    const os = () => {
        let os = navigator.userAgent.toLowerCase();
        let sw = screen.width;
        let sh = screen.height;
        let infor = document.querySelector(".info");

        if (os.indexOf("windows") >= 0) {
            infor.innerHTML = "현재 윈도우를 사용하고 있으며, 화면 크기는 " + sw + "x" + sh + " 입니다."
        } else if (os.indexOf("macintosh") >= 0) {
            nfor.innerHTML = "현재 맥을 사용하고 있으며, 화면 크기는 " + sw + "x" + sh + " 입니다."
        } else if (os.indexOf("iphone") >= 0) {
            infor.innerHTML = "현재 아이폰을 사용하고 있으며, 화면 크기는 " + sw + "x" + sh + " 입니다."
        } else if (os.indexOf("android") >= 0) {
            infor.innerHTML = "현재 안드로이드 폰을 사용하고 있으며, 화면 크기는 " + sw + "x" + sh + " 입니다."
        }
    }
    os();

    const classRemove = () => {
        $("#header").removeClass("red blue green yellow");
    }
    
    $(".icon1").draggable({
        containment: ".icon__box", scroll:false,

        start: function() {
            $(".cursor img").attr("src", "images/game_mouse01.png");
        },
        drag: function() {
            $(".info").html("지금은 <span style='color:hotpink'>MUSIC</span> 폴더를 드래그하고 있습니다.");
            $("#header").addClass("red");
        },
        stop: function() {
            $(".info").html("드래그가 끝났습니다.");
            setTimeout(os,3000);
            setTimeout(classRemove,3000);
        }
    });
    $(".icon2").draggable({
        containment: ".icon__box", scroll:false,

        start: function() {
            $(".cursor img").attr("src", "images/game_mouse02.png");
        },
        drag: function() {
            $(".info").html("지금은 <span style='color:purple'>TETRIS</span> 폴더를 드래그하고 있습니다.");
            $("#header").addClass("blue");
        },
        stop: function() {
            $(".info").html("드래그가 끝났습니다.");
            setTimeout(os,3000);
            setTimeout(classRemove,3000);
        }
    });
    $(".icon3").draggable({
        containment: ".icon__box", scroll:false,

        start: function() {
            $(".cursor img").attr("src", "images/game_mouse03.png");
        },
        drag: function() {
            $(".info").html("지금은 <span style='color:green'>초록색</span> 폴더를 드래그하고 있습니다.");
            $("#header").addClass("green");
        },
        stop: function() {
            $(".info").html("드래그가 끝났습니다.");
            setTimeout(os,3000);
            setTimeout(classRemove,3000);
        }
    });
    $(".icon4").draggable({
        containment: ".icon__box", scroll:false,

        start: function() {
            $(".cursor img").attr("src", "images/game_mouse04.png");
        },
        drag: function() {
            $(".info").html("지금은 <span style='color:yellow'>노란색</span> 폴더를 드래그하고 있습니다.");
            $("#header").addClass("yellow");
        },
        stop: function() {
            $(".info").html("드래그가 끝났습니다.");
            setTimeout(os,3000);
            setTimeout(classRemove,3000);
        }
    });
    $(".music__wrap").draggable({
        scroll:false,

        start: function() {
            $(".cursor img").attr("src", "images/game_mouse04.png");
        },
        drag: function() {
            $(".info").html("지금은 <span style='color:yellow'>노란색</span> 폴더를 드래그하고 있습니다.");
            $("#header").addClass("yellow");
        },
        stop: function() {
            $(".info").html("드래그가 끝났습니다.");
            setTimeout(os,3000);
            setTimeout(classRemove,3000);
        }
    });

    $(".icon1").on("click", function(){
        $('.music').removeClass("hide");
    });
    $(".icon2").on("click", function(){
        $('.music').addClass("hide");
    });
    $(".icon3").on("click", function(){
        $('.music').addClass("hide");
    });
    $(".icon4").on("click", function(){
        $('.music').addClass("hide");
    }); 
    $("#header").on("click", function(){
        $('.music').addClass("hide");
    });

    window.onload = function(){
        window.addEventListener("mousemove", e => {
            gsap.to(".cursor", {duration: 0, left: e.pageX - 5, top: e.pageY - 10});
        });
    }

    // 시간 구현 1
    function time(){
        const now = document.querySelector(".time");
        
        const today = new Date();
        
        const year = today.getFullYear();
        const month = today.getMonth()+1;
        const date = today.getDate();
        const hours = today.getHours();
        const minute = today.getMinutes();
        const second = today.getSeconds();

        now.innerHTML = year + "년 " + month +"월 " + date + "일 "+ hours + "시" + minute + "분";
    }
    time();

    setInterval(time,1000);
}
export default start;