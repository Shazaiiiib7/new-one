


function allAnimatons() {
    tl = gsap.timeline();
    tl.from(".nav-bar", {
        y: -100,
        opacity: 0,
        duration: 0.3,
    })
    tl.to(".page-1 .text-area-1 .text h1 , .page-1 .text-area-1 .text h6 , .page-1 .text-area-2 .text>h3", {
        y: 0,
        duration: 0.6,
        opacity: 1,
        stagger: 0.2,
    })

}
allAnimatons();

var cursor = document.querySelector('.cursor');
// function cursorScaller() {
//     var oldXPos = 0;
//     var oldYPos = 0;
//     var Xscale =1 ;
//     var Yscale = 1;
//     window.addEventListener("mousemove", function (dtls) {
//         clearTimeout(timeover);
        
//         var Xscale = gsap.utils.clamp(0.5,1.2, dtls.clientX - oldXPos);
//         var Yscale = gsap.utils.clamp(0.5,1.2, dtls.clientY - oldYPos);
        
//         oldXPos = dtls.clientX;
//         oldYPos = dtls.clientY;

//         cursorMovement(Xscale,Yscale);

//        var timeover = setTimeout(function(){
//         document.querySelector('.cursor').style.transform = `translate(${dtls.clientX}px,${dtls.clientY}px) scale(1,1)`;
//        }, 200)

//     })
// }
// cursorScaller();
function cursorMovement(Xscale,Yscale) {
    window.addEventListener("mousemove", function (dtls) {
        cursor.style.transform = `translate(${dtls.clientX}px,${dtls.clientY}px)`;
    })
    
}
cursorMovement();


function littleAnimation() {
    var arrowBtn = document.querySelectorAll(".page-1 .footer #box3 .circle");
    arrowBtn.forEach(function (element) {
        element.addEventListener("mouseenter", function () {
            element.style.scale = 1.3;
            element.style.backgroundColor = "white"
        })
        element.addEventListener("mouseleave", function () {
            element.style.scale = 1;
            element.style.backgroundColor = "rgb(116, 116, 116)"

        })

    })
    var line = document.querySelectorAll(".page-2 .box");
    line.forEach(function (element) {

        element.addEventListener("mousemove", function (dtls) {
            var Ydiff = (dtls.clientY - element.getBoundingClientRect().top);
            var Xdiff = (dtls.clientX - element.getBoundingClientRect().left);
            gsap.to(element.querySelector("img"), {
                top: Ydiff,
                left: Xdiff,
                opacity: 1,
                ease: Power2,
            })
        })
        element.addEventListener("mouseleave", function (dtls) {
            gsap.to(element.querySelector("img"), {
                ease: Power3,
                opacity: 0,
            })
        })
        
        oldRotate = 0;
        element.addEventListener("mouseenter",function(){
            element.querySelector("h1").style.color  = "rgb(42, 42, 42)";
            element.querySelector("h1").style.transform  = `translateX(4vmax)`;

            element.addEventListener("mousemove",function(dtls){

                var Ydifference = (dtls.clientY - element.getBoundingClientRect().top);
                var xdifference = (dtls.clientX - element.getBoundingClientRect().left);
                var newRotate = xdifference - oldRotate;
                oldRotate = xdifference;

                var imageRotation = gsap.utils.clamp(-40,40,newRotate);

                gsap.to(element.querySelector("img"),{
                    top :Ydifference,
                    left : xdifference ,
                    opacity : 1,
                    ease : Power3,
                    rotate : imageRotation,
                    // transform : `translate(${xdifference},${Ydifference})`,
                })

            })

        })
        element.addEventListener("mouseleave",function(dtls){
            element.querySelector("h1").style.color  = "rgb(116, 116, 116)";
            element.querySelector("h1").style.transform  = `translateX(0)`;

        })
        var talkButton = document.querySelector(".page-3 .about-section .btn")
        talkButton.addEventListener("mouseenter",function(){
            talkButton.style.backgroundColor = "white";
            talkButton.style.color = "black";
            talkButton.style.scale = 1.1;

        })
        talkButton.addEventListener("mouseleave",function(){
            talkButton.style.backgroundColor = "black";
            talkButton.style.color = "white";
            talkButton.style.scale = 1;

        })
        var linkButton = document.querySelectorAll("footer #right-section h4");
        linkButton.forEach(function(element){
            element.addEventListener("mouseover",function(){
                element.style.transform =`translateY(-1vmax)`;
                // element.style.scale =1.2;
                element.style.letterSpacing = 2+"px";
            })
            element.addEventListener("mouseleave",function(){
                element.style.transform =`translateY(0vmax)`;
                // element.style.scale =1;
                element.style.letterSpacing = 0+"px";
            })
        })

    })

}
littleAnimation();