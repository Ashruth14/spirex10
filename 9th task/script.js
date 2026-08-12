let images=[];
let currentImage=0;

function openImage(img){
images=document.querySelectorAll(".image img");
currentImage=Array.from(images).indexOf(img);
document.getElementById("preview").src=img.src;
document.getElementById("modal").style.display="flex";
}

function closeImage(){
document.getElementById("modal").style.display="none";
}

function changeImage(direction){
currentImage+=direction;

if(currentImage<0){
currentImage=images.length-1;
}

if(currentImage>=images.length){
currentImage=0;
}

document.getElementById("preview").src=images[currentImage].src;
}

function filterImages(category){
let items=document.querySelectorAll(".image");
let buttons=document.querySelectorAll(".filters button");

buttons.forEach(button=>button.classList.remove("active"));
event.target.classList.add("active");

items.forEach(item=>{
if(category==="all"||item.classList.contains(category)){
item.style.display="block";
}else{
item.style.display="none";
}
});
}