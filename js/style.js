// animation1
let sousTitres=document.querySelectorAll(".sousTitres");

// animation2
let gauche=document.querySelector(".gauche");

// animation3
let herosBtn=document.querySelector("heroBtn");
let adveBtn=document.querySelector("adveBtn");

if(herosBtn!=null && hero!=undefined){

}
if(herosBtn!=null && hero!=undefined){
        
}

// animation4
let blockInFade=document.querySelector(".blockInFade");
let imgZoom=document.querySelectorAll(".imgZoom");
let descriPersonnage=document.querySelectorAll(".personnage-description");
blockInFade.style.transition="1s"
for (let i = 0; i < imgZoom.length; i++) {
    imgZoom[i].addEventListener("mouseover",function(){
        descriPersonnage[i].style.bottom="-10px"
        descriPersonnage[i].style.overflow="visible"
    });
    imgZoom[i].addEventListener("mouseout",function(){
        descriPersonnage[i].style.bottom="";
        descriPersonnage[i].style.overflow="hidden "
    });
}


// animation5
let point=document.querySelectorAll(".peti-ico span");
let citations=document.querySelectorAll(".citations");
let counter2=0;
setInterval(function () {
    document.querySelector(".rong").classList.remove("rong");
    point[counter2].classList.add("rong");
    document.querySelector(".citations-active").classList.remove("citations-active");
    citations[counter2].classList.add("citations-active");
    counter2++;
    if(counter2==point.length){counter2=0;
    }
},4500);

// animation6
let slider_content=document.querySelectorAll(".slide-content");
let counter=0;
setInterval(function () {
    for (let i = 0; i < slider_content.length; i++) {
        slider_content[i].style.transform="translateX(-200%)";
    }
    slider_content[counter].style.display="flex";
    slider_content[counter].style.transform="translateX(0%)" 
    counter++;
    if(counter==3){counter=0;}

},5500);

// survol
    let nav_underline=document.querySelectorAll("header nav a span");
    let nav_link=document.querySelectorAll("header nav a");
    for (let i = 0; i < nav_link.length; i++) {
        nav_link[i].addEventListener("mouseover",(e)=>{
            nav_underline[i].style.width="100%";
            e.target.style.fontWeight="bolder"
        }); 
        nav_link[i].addEventListener("mouseout",(e)=>{
            if(e.target.classList.contains("active")==false)nav_underline[i].style.width="0";
            e.target.style.fontWeight=""
        });
    }

    // message
    
    document.querySelector(".popup").onclick=()=>{
        document.querySelector(".popup").style.display="none";
        document.querySelector("form").style.display="block";
    }
    document.querySelector("#submit").onclick=(e)=>{
        e.preventDefault();
        document.querySelector(".popup").style.display="flex";
        document.querySelector("form").style.display="none";
     }
    
    // fade in
    let text=["BATMAN AU CINÉMA","NÉMÉSIS","MULTIMÉDIA"];
    let titres=document.querySelectorAll(".titre");   
    let description=document.querySelector(".description");
    let fleche=document.querySelector(".image-scroll-btn div  img");
    function fadeIn() {
        description.style.transform="translateX(0)";
        fleche.style.transform="translate(0)";
        for (let i = 0; i < imgZoom.length; i++) {
            imgZoom[i].style.transform="scale(1)";
        }
        for (let i = 0; i < titres.length; i++) {
            titres[i].style.transform="translate(0)";
            titres[i].style.opacity="1";
            titres[i].textContent=text[i];
        }
        blockInFade.style.transform="translateX(10px)";
    }
    window.onload=fadeIn;


    //scroll
    let icone = document.querySelector(".icone");
    // var icone2 = document.querySelector(".scroll2");
    window.addEventListener("scroll",()=>{
    const {scrollTop} = document.documentElement;
    if(scrollTop<=5400 && scrollTop>100)
    icone.style.top=scrollTop+"px";
    console.log(scrollTop)
    });

    // slider bg
    /*var i, urlImage;
    i=0;
    urlImage=["Assets/Illustrations/Home/Batslider1.png","Assets/Illustrations/Home/Batslider2.png", "Assets/Illustrations/Home/Batslider3.png", "Assets/Illustrations/Home/Batslider4.png", "Assets/Illustrations/Home/Batslider5.png", "Assets/Illustrations/Home/Batslider6.png","Assets/Illustrations/Home/Batslider7.png"];
    var pub =document.querySelector("#scroll");
    
    function animation()
        setInterval(function (){
            pub.style.backgroundImage="url('"+urlImage[i]+"')";
            i++;
            if(i>7)i=0;
        },100);
        window.onload=animation();*/

    let urlBg=[""]