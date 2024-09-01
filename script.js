landscapeButton = document.querySelector("#lbtn");
portraitBtn = document.querySelector("#pbtn");
frame = document.querySelector(".frame");
image = document.querySelector("#image");
leftButton = document.querySelector(".left");
rightButton = document.querySelector(".right");

image.src = "public/Cat-Images-Dataset-master/cat images/Image_1.jpg";
const imageNo = 219;
let currentIndex = 1;


leftButton.addEventListener('click',()=> {
    if(currentIndex==1) currentIndex = imageNo;
    else currentIndex = (currentIndex - 1);
    image.src = "public/Cat-Images-Dataset-master/cat images/Image_"+ currentIndex + ".jpg";
    
    console.log(currentIndex);
})

rightButton.addEventListener('click',()=> {
        currentIndex = (currentIndex + 1) % imageNo;
        image.src = "public/Cat-Images-Dataset-master/cat images/Image_"+ currentIndex + ".jpg";
        console.log(currentIndex);
})

landscapeButton.addEventListener('click', ()=>{
    if(!frame.classList.contains('landscape')){
        frame.classList.add('landscape');
        frame.classList.remove('portrait');
    }
})

portraitBtn.addEventListener('click', ()=>{
    if(!frame.classList.contains('portrait')){
        frame.classList.add('portrait');
        frame.classList.remove('landscape');
    }
})
