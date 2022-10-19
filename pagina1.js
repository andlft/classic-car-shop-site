const main = document.getElementsByClassName("main")[0];
main.style.color = "red";
const images = document.getElementsByTagName("img");
for(let x = 2; x < images.length; x++){
    images[x].className = "borderRosuDublu";
}
const acasa = document.getElementById("acasa").getElementsByTagName("a")[0];
acasa.style.backgroundColor = "crimson";
acasa.innerHTML = "ACASA";

let data = new Date();
