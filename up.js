    const bars = document.querySelector(".fa-bars");
    const menulist = document.querySelector(".navlist");
    const images = document.querySelector(".image-box");
    const backBtn = document.getElementById("back");
    const nextBtn = document.getElementById("next");
    const cards = document.querySelectorAll(".box");
    const questionContent = document.querySelectorAll(".question-content");
    const bodyEl = document.querySelector("body");

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

   //portfolio//
   const buttons = document.querySelectorAll(".item");
   const portfolioContentEl = document.querySelector(".portfolio-content");
   const worksEl = document.querySelector(".works");
   const filterList = document.querySelector(".portfolio-list");
   const imageGallary = document.querySelectorAll(".work-item");


    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(){  
            const target = this.getAttribute("data-target");
    for(let k = 0; k < imageGallary.length; k++){ 
        imageGallary[k].classList.toggle("show");
            if(target == imageGallary[k].getAttribute("data-id") && imageGallary[k].classList.contains("show")){
                imageGallary[k].classList.add("show");
                imageGallary[k].classList.remove("hidden");
            }else{
                imageGallary[k].classList.add("hidden");
                imageGallary[k].classList.remove("show");
            }
        }
    });
}

// FAQ section //
questionContent.forEach((content, index)=>{
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
        removeOpen(index);
    });
});
function removeOpen(index1){
    questionContent.forEach((content2, index2) =>{
        if(index1 != index2){
            content2.classList.remove("open");

            let dis = content2.querySelector(".discription");
            dis.style.height = "0px";
            content2.querySelector("i").classList.replace("fa-angle-down", "fa-angle-right");
        }
    });
}

//email form//
const formEl = document.querySelector(".form");
const emailEl = document.getElementById("email");
const textEl = document.getElementById("name");
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

