function homepageAnimation(){
    gsap.set(".slidesm",{
        scale:3
    })
    var tl=gsap.timeline({
        scrollTrigger:{
            trigger:".home",
            start:"top top",
            end:"bottom bottom",
            scrub:1,        },
    })
    tl.
    to(".vdodiv",{
        '--clip':'0%',
        ease:Power2,
    },'a')
    .to(".slidesm",{
        scale:1,
        ease:Power2,
    },'a')
    .to(".lft",{
        xPercent:-10,
        stagger:0.03,
        ease:Power4,
    },'b')
    .to(".rgt",{
        xPercent:10,
        stagger:0.03,
        ease:Power4,
    },'b')
    
}

function realpageAnimation(){
    gsap.to(".slide",{
        scrollTrigger:{
            trigger:".real",
            start:"top top",
            end:"bottom bottom",
            scrub:2
        },
        xPercent:-200,
        ease:Power2
    })
}
function teamAnimation(){
    document.querySelectorAll(".listelem")
.forEach(function(el){
    el.addEventListener("mousemove",function(dets){
       
            gsap.to(this.querySelectorAll(".picture"),{
                opacity:1,
                ease:Power4,
                duration:.5,
                x: gsap.utils.mapRange(0,window.innerWidth,-200,200,dets.clientX)
            })
    });
    el.addEventListener("mouseleave",function(dets){
        gsap.to(this.querySelectorAll(".picture"),{
            opacity:0,
            ease:Power4,
            duration:.5
        })
    });
})
}
function textparaAnimation(){
    var clutter="";
document.querySelector(".textpara")
.textContent.split("")
.forEach(function(e){
    if(e=== " ") clutter +=`<span>&nbsp;</span>`
    clutter +=`<span>${e}</span>`
});
document.querySelector(".textpara").innerHTML = clutter;

gsap.set(".textpara span",{ opacity:.1})
gsap.to(".textpara span",{
    scrollTrigger:{
        trigger:".para",
        start:"top 60%",
        end:"bottom 90%",
        scrub:1.8,
    },
    opacity:1,
    stagger:.03,
    ease: Power4,
});
}

function capsulesAnimation(){
    gsap.to(".capsule2",{
        scrollTrigger:{
            trigger:".capsules",
            start:"top 70%",
            end:"bottom bottom",
            scrub:1
        },
        y:0,
        ease:Power4,
    })
}
function bodyColorChangeAnimation(){
    document.querySelectorAll(".section")
.forEach(function(e){
    ScrollTrigger.create({
        trigger:e,
        start:"top 50%",
        end:"bottom 50%",
        onEnter:function(){
            document.body.setAttribute("theme",e.dataset.color);
        },
        onEnterBack:function(){
            document.body.setAttribute("theme",e.dataset.color);
        }
    })
})
}
function cardsAnimation(){
    document.querySelectorAll(".card")
.forEach(function(e){
    gsap.to(e,{
        scrollTrigger:{
            trigger:e,
            start:"top 50%",
            end:"bottom bottom",
            scrub:2,
        },
        x:100,
        backgroundColor: "black",
        ease:Power2
    })
});   
}


cardsAnimation();
bodyColorChangeAnimation();
textparaAnimation();
teamAnimation();
realpageAnimation();
homepageAnimation();
capsulesAnimation();