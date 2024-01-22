var $eyes = $(".eyes"),
  $snout = $(".snout"),
  $spot = $(".spot"),
  $nose = $(".nose"),
  $ear = $(".ear"),
  $rightear = $(".right"),
  $leftleg = $(".l"),
  $rightleg = $(".r"),
  $leftpaw = $(".l .paw"),
  $rightpaw = $(".r .paw"),
  $container = $(".wrap"),
  $outer = $("body"),
  container_w = $container.width(),
  container_h = $container.height();
$("body").on("mousemove.parallax", function (event) {
  var pos_x = event.pageX,
    pos_y = event.pageY,
    left = 0,
    bottom = 0,
    top = 0;
  left = container_w / 0.5 - pos_x;
  top = container_h / 2 - pos_y;
  bottom = container_h / 0.25 - pos_y * 2.5;
  TweenMax.to($snout, 1, {
    css: {
      transform:
        "translateX(" +
        left / -32 +
        "px) translateY(" +
        top / -26 +
        "px) translateZ(1px)",
    },
    ease: Expo.easeOut,
    overwrite: "all",
  });
  TweenMax.to($spot, 1, {
    css: {
      transform:
        "translateX(" +
        left / -32 +
        "px) translateY(" +
        top / -56 +
        "px) translateZ(1px)",
    },
    ease: Expo.easeOut,
    overwrite: "all",
  });
  TweenMax.to($eyes, 1, {
    css: {
      transform:
        "translateX(" +
        left / -40 +
        "px) translateY(" +
        top / -40 +
        "px) translateZ(0px)",
    },
    ease: Expo.easeOut,
    overwrite: "all",
  });
  TweenMax.to($nose, 1, {
    css: {
      transform:
        "translateX(" +
        left / -40 +
        "px) translateY(" +
        top / -50 +
        "px) translateZ(0px)",
    },
    ease: Expo.easeOut,
    overwrite: "all",
  });
  TweenMax.to($ear, 1, {
    css: {
      transform:
        "rotate(" +
        bottom / -60 +
        "deg) translatex(" +
        left / 60 +
        "px) translateY(" +
        top / 40 +
        "px) translateZ(-2px)",
    },
    ease: Expo.easeOut,
    overwrite: "all",
  });
  TweenMax.to($rightear, 1, {
    css: {
      transform:
        "rotate(" +
        bottom / 60 +
        "deg) translatex(" +
        left / 60 +
        "px) translateY(" +
        top / 40 +
        "px) translateZ(-2px)",
    },
    ease: Expo.easeOut,
    overwrite: "all",
  });
  TweenMax.to($leftleg, 1, {
    css: {
      transform:
        "rotate(" +
        left / 30 +
        "deg) translateY(" +
        top / -100 +
        "px) translateZ(-2px)",
    },
    ease: Expo.easeOut,
    overwrite: "all",
  });
  TweenMax.to($rightleg, 1, {
    css: {
      transform:
        "rotate(" +
        left / 30 +
        "deg) translateY(" +
        top / -100 +
        "px) translateZ(-2px)",
    },
    ease: Expo.easeOut,
    overwrite: "all",
  });
  TweenMax.to($leftpaw, 1, {
    css: {
      transform:
        "rotate(" +
        left / -30 +
        "deg) translateY(" +
        bottom / -120 +
        "px) translatex(" +
        left / -50 +
        "px) translateZ(2px)",
    },
    ease: Expo.easeOut,
    overwrite: "all",
  });
  TweenMax.to($rightpaw, 1, {
    css: {
      transform:
        "rotate(" +
        left / -30 +
        "deg) translateY(" +
        bottom / -120 +
        "px) translatex(" +
        left / -50 +
        "px) translateZ(2px)",
    },
    ease: Expo.easeOut,
    overwrite: "all",
  });
});
