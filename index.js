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
        let image=document.getElementsByClassName("c-image");
        for(let i=0;i<slides.length;i++){
            image[i].style.display="block";
        }
        let slides=document.getElementsByClassName("c-image-n");
        for(let i=0;i<slides.length;i++){
            slides[i].style.display="none";
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
    let hours=now.getHours();
    let min=now.getMinutes();
    let sec=now.getSeconds();
    document.getElementById("time").innerHTML=hours+":"+min+":"+sec;
    setTimeout("time()", 1000);
}
function showcard(num){
    document.getElementById("fullpage").style.filter="blur(5px)";
    document.getElementById("card").style.display="block";
    let slides=document.getElementsByClassName("authorimage");
    for(let i=0; i<slides.length; i++) {
        slides[i].style.display="none";
    }
    let books=document.getElementsByClassName("bookimage");
    for(let i=0; i<books.length; i++) {
        books[i].style.display="none";
    }
    let para=document.getElementsByClassName("para");
    for(let i=0; i<para.length; i++) {
        para[i].style.display="none";
    }
    if(num==-1){
        document.getElementById("author-1").style.display="block";
        document.getElementById("book-1").style.display="block";
        document.getElementById("para-1").style.display="block";
    }else if(num==1){
        document.getElementById("author1").style.display="block";
        document.getElementById("book1").style.display="block";
        document.getElementById("para1").style.display="block";
    }else if(num==-2){
        document.getElementById("author-2").style.display="block";
        document.getElementById("book-2").style.display="block";
        document.getElementById("para-2").style.display="block";
    }else if(num==2){
        document.getElementById("author2").style.display="block";
        document.getElementById("book2").style.display="block";
        document.getElementById("para2").style.display="block";
    }else if(num==-3){
        document.getElementById("author-3").style.display="block";
        document.getElementById("book-3").style.display="block";
        document.getElementById("para-3").style.display="block";
    }else if(num==3){
        document.getElementById("author3").style.display="block";
        document.getElementById("book3").style.display="block";
        document.getElementById("para3").style.display="block";
    }else if(num==-4){
        document.getElementById("author-4").style.display="block";
        document.getElementById("book-4").style.display="block";
        document.getElementById("para-4").style.display="block";
    }else if(num==4){
        document.getElementById("author4").style.display="block";
        document.getElementById("book4").style.display="block";
        document.getElementById("para4").style.display="block";
    }else if(num==-5){
        document.getElementById("author-5").style.display="block";
        document.getElementById("book-5").style.display="block";
        document.getElementById("para-5").style.display="block";
    }else if(num==5){
        document.getElementById("author5").style.display="block";
        document.getElementById("book5").style.display="block";
        document.getElementById("para5").style.display="block";
    }
}
function closecard(){
    document.getElementById("card").style.display="none";
    document.getElementById("fullpage").style.filter="blur(0px)";
    document.getElementById("classic-mover-prev").style.top="130vh";
    document.getElementById("classic-mover-next").style.top="130vh";
}

