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
