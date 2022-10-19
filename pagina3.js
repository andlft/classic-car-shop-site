const imagini = document.getElementsByTagName("img");
colors = ["green", "blue", "red", "orange", "lawngreen", "purple", "yellow"];
for(let x = 2; x< imagini.length; x++){
    console.log(imagini[x]);
    imagini[x].style.border = "2px solid black";
    imagini[x].style.borderColor = ""+colors[Math.floor(Math.random()*7)];
    imagini[x].style.padding = "0px";

}
imagini[10].style.marginLeft = "3vw";