var tl= gsap.timeline()

tl.from("#nav h3",{
    y:-50,
    duraton:1,
    opacity:0,
    delay:0.2,
    stagger:0.2,
})
tl.from("#text h1",{
   x:-400,
   duraton:0.8,
   opacity:0,
   delay:0.2,
   stagger:0.2,
})
tl.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.7,
    delay:0.1,
    stagger:0.4,
})
tl.from("#foot",{
    y:-12,
    opacity:0,
    duraton:0.8,
    delay:0.2,
    stagger:0.2,
})