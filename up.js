    const bars = document.querySelector(".fa-bars");
    const menulist = document.querySelector(".navlist");
    const images = document.querySelector(".image-box");
    const backBtn = document.getElementById("back");
    const nextBtn = document.getElementById("next");
    const cards = document.querySelectorAll(".box");
    const buttons = document.querySelectorAll(".item");
    const imageGallary = document.querySelectorAll(".work-item");
    const questionContent = document.querySelectorAll(".question-content");
    const bodyEl = document.querySelector("body");
    const portfolioContentEl = document.querySelector(".portfolio-content");
    const worksEl = document.querySelector(".works");

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


    const boxEl = document.querySelectorAll(".box");

    boxEl.forEach((boxes, number)=>{
        let descriptionEl = boxes.querySelector(".description");
        boxes.addEventListener("click", ()=>{
            descriptionEl.classList.toggle("open");
        });
    });

    
   //portfolio//

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
    });
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

//email form//

const emailEl = document.getElementById("email");
const textEl = document.getElementById("text");
const textareaEl = document.getElementById("msg");
const sendBtn = document.getElementById("send");

sendBtn.addEventListener("click", (e)=>{
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











