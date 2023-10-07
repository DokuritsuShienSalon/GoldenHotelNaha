'use strict';

// gsap.to(".js-title", { x: 200 })

gsap.fromTo(".js-photo",{
  y: '20%',
  opacity: 0
},{
  y:0,
  duration: 1,
  ease:"power1.out",
  opacity: 1,
  scrollTrigger:{
    trigger: '.js-photo',
    start: 'top 80%',
  }
});

gsap.fromTo(".js-title",{
  x: '-50%',
  opacity: 0
},{
  x:0,
  duration: 1,
  ease:"power1.out",
  opacity: 1,
  scrollTrigger:{
    trigger: '.js-title',
    start: 'top 80%',
    // markers: true
  }
});

gsap.fromTo(".js-booknow",{
  y: '20%',
  opacity: 0
},{
  y:0,
  duration: 1,
  ease:"power1.out",
  opacity: 1,
  scrollTrigger:{
    trigger: '.js-booknow',
    start: 'top 80%',
  }
});

gsap.fromTo(".js-news",{
  y: '20%',
  opacity: 0
},{
  y:0,
  duration: 1,
  ease:"power1.out",
  opacity: 1,
  scrollTrigger:{
    trigger: '.js-news',
    start: 'top 80%',
  }
});
gsap.fromTo(".js-story",{
  y: '20%',
  opacity: 0
},{
  y:0,
  duration: 1,
  ease:"power1.out",
  opacity: 1,
  scrollTrigger:{
    trigger: '.js-story',
    start: 'top 80%',
  }
});

const tl = gsap.timeline(  {scrollTrigger:{
  trigger: '.js-cuisine',
  start: 'top 80%',
}});
tl.fromTo(".js-cuisine",{
  y: '20%',
  opacity: 0
},{
  y:0,
  duration: 1,
  ease:"power1.out",
  opacity: 1,

},"same").fromTo(".js-cuisine1",{
  y: '20%',
  opacity: 0
},{
  y:0,
  duration: 1,
  ease:"power1.out",
  opacity: 1,
  // scrollTrigger:{
  //   trigger: '.js-cuisine1',
  //   start: 'top 80%',
  // }
},"same");

gsap.fromTo(".js-cuisine2",{
  y: '20%',
  opacity: 0
},{
  y:0,
  duration: 1,
  ease:"power1.out",
  opacity: 1,
  scrollTrigger:{
    trigger: '.js-cuisine2',
    start: 'top bottom',
  }
});
gsap.fromTo(".js-special",{
  y: '20%',
  opacity: 0
},{
  y:0,
  duration: 1,
  ease:"power1.out",
  opacity: 1,
  scrollTrigger:{
    trigger: '.js-special',
    start: 'top 80%',
  }
});
gsap.fromTo(".js-fitness",{
  y: '20%',
  opacity: 0
},{
  y:0,
  duration: 1,
  ease:"power1.out",
  opacity: 1,
  scrollTrigger:{
    trigger: '.js-fitness',
    start: 'top 80%',
  }
});
gsap.fromTo(".js-wedding",{
  y: '20%',
  opacity: 0
},{
  y:0,
  duration: 1,
  ease:"power1.out",
  opacity: 1,
  scrollTrigger:{
    trigger: '.js-wedding',
    start: 'top 80%',
  }
});
gsap.fromTo(".js-meeting",{
  y: '20%',
  opacity: 0
},{
  y:0,
  duration: 1,
  ease:"power1.out",
  opacity: 1,
  scrollTrigger:{
    trigger: '.js-meeting',
    start: 'top 80%',
  }
});