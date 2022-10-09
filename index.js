imageshow();
var cur=0;
function plusSlides(num){
    cur=cur+Number(num); 
    imageshow();
}
function imageshow(){
    let slides=document.getElementsByClassName("image");
    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    if(cur==0){
        document.getElementById("image1").style.display="block";
    }else if(cur==1){
        document.getElementById("image2").style.display="block";
    }else if(cur==2){
        document.getElementById("image3").style.display="block";
    }else if(cur==3){
        document.getElementById("image4").style.display="block";
    }else if(cur>3){
        document.getElementById("image1").style.display="block";
        cur=0;
    }else{
        document.getElementById("image4").style.display="block";
        cur=3;
    }
}
let now=true;
function changeslide(num){
    if(now==true){
        let slides=document.getElementsByClassName("c-image-n");
        for(let i=0;i<slides.length;i++){
            slides[i].style.display="none";
        }
        let image=document.getElementsByClassName("c-image");
        for(let i=0;i<slides.length;i++){
            image[i].style.display="block";
        }
        now=false;
    }else{
        let slides=document.getElementsByClassName("c-image-n");
        for(let i=0;i<slides.length;i++){
            slides[i].style.display="block";
        }
        let image=document.getElementsByClassName("c-image");
        for(let i=0;i<slides.length;i++){
            image[i].style.display="none";
        }
        now=true;
    }
}
date() ;
function date(){
    let now=new Date();
    let month=Number(now.getMonth())+Number(1);
    document.getElementById("date").innerHTML=now.getDate()+"-"+month+"-"+now.getFullYear();
    
}
time();
function time(){
    let now=new Date();
    document.getElementById("time").innerHTML=now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
}