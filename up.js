    const bars = document.querySelector(".fa-bars");
    const menulist = document.querySelector(".navlist");
    const images = document.querySelector(".image-box");
    const backBtn = document.getElementById("back");
    const nextBtn = document.getElementById("next");
    const cards = document.querySelectorAll(".box");
    const buttons = document.querySelectorAll(".item");
    const imageGallary = document.querySelectorAll(".work-item");
    const questionContent = document.querySelectorAll(".question-content");

    

    //bar menu//
    bars.addEventListener("click", ()=>{
        menulist.classList.toggle("show-navlist");
    });
    window.addEventListener("scroll", ()=>{
        menulist.classList.remove("show-navlist");
    });

    //rotate image slider//
    let a = 0;
    let timer;

    backBtn.addEventListener("click", ()=>{
        a = a + 45;
        clearTimeout(timer);
        updateImage();
    });
    nextBtn.addEventListener("click", ()=>{
        a = a - 45;
        clearTimeout(timer);
        updateImage();
    });

    function updateImage(){
        images.style.transform = `perspective(1000px) rotateY(${a}deg)`;
        timer = setTimeout(()=>{
        a = a - 45;    
        updateImage();
        }, 3000);
    }


    //services section//


    gsap.registerPlugin(Flip);

    cards.forEach((card,index) => {
        card.addEventListener("click", ()=>{
            const state = Flip.getState(cards);
            const isCardActive = card.classList.contains("active");
        cards.forEach((otherCard, otherInx) => {
            otherCard.classList.remove("active");
            otherCard.classList.remove("inactive");
            if(!isCardActive && index !== otherInx){
                otherCard.classList.add("inactive");
                }
            });
            if(!isCardActive) card.classList.add("active");

                Flip.from(state, {
                    duration: 1,
                    ease: "expo.out",
                    absolute: true,
            });
        });
    });

    
   

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(){
    for(let j = 0; j < buttons.length; j++){
            buttons[j].classList.remove("active");
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target");

    for(let k = 0; k < imageGallary.length; k++){
            imageGallary[k].style.display = "none";
            if(target == imageGallary[k].getAttribute("data-id")){
                imageGallary[k].style.display = "block";
            }
        }
    })
}

// FAQ section //
questionContent.forEach((content)=>{
    let title = content.querySelector(".title");
    title.addEventListener("click", ()=>{
        content.classList.toggle("open");

    let discription = content.querySelector(".discription");
    if(content.classList.contains("open")){
        discription.style.height = `${discription.scrollHeight}px`;
        content.querySelector("i").classList.replace("fa-angle-right", "fa-angle-down");
    }else{
        discription.style.height = "0px";
        content.querySelector("i").classList.replace("fa-angle-down", "fa-angle-right");
        }
    });
});

// popup window //
const popupContainer = document.querySelector(".popup-container");
const popupForm = document.querySelector(".popup-form");
const popupBtn = document.querySelector("#popup-btn");
const closeIconBtn = document.querySelector(".fa-xmark");
const emailEl = document.getElementById("email");
const textEl = document.getElementById("text");
const textareaEl = document.getElementById("msg");
const buttonEl = document.getElementById("button");

buttonEl.addEventListener("click", (e)=>{
    e.preventDefault();

    let ebody = `
    <b>Name:</b>${textEl.value}
    <br>
    <b>Email:</b>${emailEl.value}
    <br>
    <b>Message:</b>${textareaEl.value}
    <br>`
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "annavizualizer@outlook.com",
        Password : "C1CD3CCEB10EBF7056642F17A65527E5D565",
        To : 'annavizualizer@outlook.com',
        From : "annavizualizer@outlook.com",
        Subject : "Test email from" + emailEl.value,
        Body : ebody
    }).then(
      message => alert(message)
    );
});

popupBtn.addEventListener("click", ()=>{
    popupContainer.classList.add("active");
    popupForm.classList.remove("active");
});

closeIconBtn.addEventListener("click", ()=>{
    popupContainer.classList.remove("active");
    popupForm.classList.add("active");
});











