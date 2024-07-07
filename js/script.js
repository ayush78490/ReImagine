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

  // var tl = gsap.timeline({scrollTrigger:{
  //   trigger: "#well",
  //   start: "100% 90%",
  //   end: "50% 50%",
  //   scrub: "true",
  //   markers: true
  // }})

  // tl.to("#cards",{
  //   top: "100%",
  //   left: "5%"
  // })

  function createBubble() {
    const section = document.querySelector(".HeroImg"); // Use querySelector to select the first matching element
    const createElement = document.createElement("span");

    var size = Math.random() * 60;

    createElement.style.width = size + 'px';
    createElement.style.height = size + 'px';
    createElement.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(createElement);

    setTimeout(() => {
        createElement.remove();
    }, 4000);
}

setInterval(createBubble, 50);
