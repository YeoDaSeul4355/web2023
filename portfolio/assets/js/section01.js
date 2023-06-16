gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
    duration: 2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.set(".introBgImg01", {opacity: 0, y: 10}); //배경 
gsap.set(".introBgImg02", {opacity: 0, y: 10}); //배경
gsap.set(".intro__inner > h1", {opacity: 0, y: -10});   // 헤더
gsap.set(".intro01 .intro__image .introImg02", {opacity: 0, x: 100, scale: 1, rotate: 30}); //꽃
gsap.set(".intro01 .intro__image .introImg03", {opacity: 0, y: -50, scale: 1}); //바나나
gsap.set(".intro01 .intro__title > h1", {opacity: 0, x: -150});  //메인 타이틀
gsap.set(".intro01 .intro__image .introImg01", {opacity: 0, x: 150, y: 100, scale: 1, rotate:270}); // 내 사진
gsap.set(".intro01 .intro__image .introImg04", {opacity: 0, x: 0, scale: 1, rotate: 360}); // 파란색 텍스트 이미지
gsap.set(".intro01 .intro__title > h2", {opacity: 0, y: 10}); //섭 타이틀

// 메인 애니메이션\
setTimeout(() => {
    let tl = gsap.timeline();

    tl.to(".introBgImg01", {opacity: 1, y: 0, duration: 0.3, stagger: 0.1, ease: Power3.easeInOut},"ee +=0.5")
    tl.to(".introBgImg02", {opacity: 1, y: 0, duration: 0.3, ease: Power3.easeInOut}, "ee +=0.5")
    tl.to(".intro__inner > h1", {opacity: 1, y: 0, duration: 0.3, ease: Power3.easeInOut}, "ee +=2.5")
    tl.to(".intro01 .intro__image .introImg02", {opacity: 1, x: 0, rotate: 0, duration: 1, ease: Power3.easeInOut}, "ee +=3")
    tl.to(".intro01 .intro__image .introImg03", {opacity: 1, y: 0, duration: 1, ease: Power3.easeInOut}, "ee +=3.5")
    tl.to(".intro__title > h1", {opacity: 1, x: 0, duration: 1,  ease: 'elastic'}, "ee +=1")
    tl.to(".intro01 .intro__image .introImg01", {opacity: 1, x: 0, y: 0,scale: 1, duration: 1, rotate:270, ease: 'elastic'}, "ee +=1")
    tl.to(".intro01 .intro__image .introImg04", {opacity: 1, x: 0, scale: 1, duration: 1, rotate: 0, ease: Power3.easeInOut}, "ee +=4")
    tl.to(".intro__title > h2", {opacity: 1, y: 0, duration: 2, ease: 'elastic'}, "ee +=2")
}, 1000);

// intro01 텍스트 이미지
gsap.to(".intro01 .intro__image .introImg04", {
    scale: 1,
    rotate: 180,
    duration: 0.1 ,
    ease: "none",
    scrollTrigger: {
        trigger: ".intro01 .intro__image .introImg04",
        start: "center 90%",
        end: "center 10%",
        scrub: 1,
        // markers: true,
    }
})

// intro01 스마일 이미지
gsap.to(".intro01 .intro__image .introImg05", {
    opacity: 0,
    scale: 0.5,
    rotate: 180,
    duration: 0.1 ,
    ease: "none",
    scrollTrigger: {
        opacity: 1,
        trigger: ".intro__inner",
        start: "center 90%",
        end: "center 10%",
        scrub: 1,
        // markers: true,
    }
})

// intro02 텍스트 이미지
gsap.to(".intro02 .intro__image .introImg02", {
    scale: 1,
    rotate: 180,
    duration: 0.1 ,
    ease: "none",
    scrollTrigger: {
        trigger: ".intro__inner",
        start: "center 90%",
        end: "center 10%",
        scrub: 1,
        // markers: true,
    }
})
gsap.to(".intro02 .intro__image .introImg01", {
    scale: 1,
    rotate: -300,
    duration: 0.1 ,
    ease: "none",
    scrollTrigger: {
        trigger: ".intro__inner",
        start: "center 90%",
        end: "center 10%",
        scrub: 1,
        // markers: true,
    }
})

// intro02 텍스트 애니메이션
let typeSplit = new SplitType('.intro02 .intro__title > h2', {
    types: 'lines, words, chars',
    tagName: 'span'
})

gsap.from('.intro02 .intro__title > h2 .word', {
    y: '110%',
    opacity: 0,
    rotationZ: '10',
    duration: 0.8,
    ease: 'circ.out',
    stagger: 0.1,
    
    scrollTrigger: {
        trigger: '.intro02',
        start: 'top center',
        end: "+=400",
        markers: true,
        scrub: 1,
        opacity: 1,
    }
})