const banner = document.getElementsByClassName("banner")[0];
const lyrics = ["Never gonna give you up",
    "Never gonna let you down",
    "Never gonna run around and desert you",
    "Never gonna make you cry",
    "Never gonna say goodbye",
    "Never gonna tell a lie and hurt you"];
let i = 0;
let wheel = document.getElementById("WheelImage");

wheel.addEventListener("click", (e)=>{
    window.addEventListener("keypress", (e)=>{
        if(e.key == "r"){
            let imagine = document.createElement("img");
            imagine.src = "data:image/jpeg;base64,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";

            banner.innerHTML ="";
            banner.style.height = "auto";
            banner.style.display = "flex";
            banner.style.flexDirection = "column";
            banner.style.minHeight = "2000px";
            banner.style.justifyContent = "flex-start";

            imagine.addEventListener("click", (e)=>{
                setInterval(myFunction, 1000);
            }, {once:true});
            banner.appendChild(imagine);

        }
    })
}, {once:true});



function myFunction(){
    let text = document.createElement("p");
    text.innerHTML = lyrics[i];
    text.style.color = `rgb(${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    banner.appendChild(text);
    banner.style.height = "auto";
    if(i==5){
        i = 0;
    }
    i++;
}