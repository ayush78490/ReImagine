VANTA.BIRDS({
    el: "#main",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color1: 0x1c00a2,
    color2: 0x77ff
  })

  var tl = gsap.timeline({scrollTrigger:{
    trigger: "#firstCard",
    start: "0% 90%",
    end: "50% 50%",
    scrub: "true",
    markers: true
  }})

  tl.to("#firstCard",{
    top: "115%",
    left: "5%"
  })