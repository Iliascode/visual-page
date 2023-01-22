    const bars = document.querySelector(".fa-bars");
    const menulist = document.querySelector(".navlist");
    const images = document.querySelector(".image-box");
    const backBtn = document.getElementById("back");
    const nextBtn = document.getElementById("next");

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



    bars.addEventListener("click", ()=>{
        menulist.classList.toggle("show-navlist");
    });
    window.addEventListener("scroll", ()=>{
        menulist.classList.remove("show-navlist");
    });


   

    
    const buttons = document.querySelectorAll(".item");
    const imageGallary = document.querySelectorAll(".work-item");
    
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
        if(target == "all"){
            imageGallary[k].style.display = "block";
        }
        }
    })
}





