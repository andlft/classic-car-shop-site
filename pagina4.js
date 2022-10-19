const div = document.getElementsByClassName("extra")[0];
div.style.display = "flex";
div.style.flexDirection = "column";
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passwordformat = /(?=.{8,})/;


let label1 = document.createElement("label");
label1.innerHTML = "email: ";
label1.style.color = "white";
let text1 = document.createElement("input");
text1.type = "text";
label1.appendChild(text1);
div.appendChild(label1);

lb = document.createElement("br");
div.appendChild(lb);

let label2 = document.createElement("label");
label2.innerHTML = "parola: ";
label2.style.color = "white";
let text2 = document.createElement("input");
text2.type = "password";
label2.appendChild(text2);
div.appendChild(label2);

let labelb1 = document.createElement("label");
labelb1.style.color = "white";
let button1 = document.createElement("input");
button1.value = "intra in cont";
button1.type = "button";
labelb1.appendChild(button1);
div.appendChild(labelb1);

let labelb2 = document.createElement("label");
labelb2.style.color = "white";
let button2 = document.createElement("input");
button2.value = "creeaza cont";
button2.type = "button";
labelb2.appendChild(button2);
div.appendChild(labelb2);

button1.addEventListener("click", (e)=>{
    if(text1.value.match(mailformat)){
        if(localStorage.getItem(""+text1.value)){
            if(localStorage.getItem(""+text1.value)==text2.value){
                alert("succesful login");
                label1.style.display = "none";
                label2.style.display = "none";
                text1.style.display = "none";
                text2.style.display = "none";
                button1.style.display = "none";
                button2.style.display = "none";

                let l1 = document.createElement("lable");
                l1.innerHTML = "model: ";
                l1.style.color = "white";
                let c1 = document.createElement("input");
                c1.type = "text";
                l1.appendChild(c1);
                div.appendChild(l1);

                let l2 = document.createElement("lable");
                l2.innerHTML = "anul fabricatiei: ";
                l2.style.color = "white";
                let c2 = document.createElement("input");
                c2.type = "number";
                l2.appendChild(c2);
                div.appendChild(l2);

                let tipCombustibil = document.createElement("div");
                tipCombustibil.innerHTML = "Alege tipul combustibilului:"
                tipCombustibil.style.color = "white";
                div.appendChild(tipCombustibil);

                let l3 = document.createElement("lable");
                l3.innerHTML = "benzina: ";
                l3.style.color = "white";
                let c3 = document.createElement("input");
                c3.type = "radio";
                c3.name = "combustibil";
                l3.appendChild(c3);
                div.appendChild(l3);

                let l4 = document.createElement("lable");
                l4.innerHTML = "motorina: ";
                l4.style.color = "white";
                let c4 = document.createElement("input");
                c4.type = "radio";
                c4.name="combustibil";
                l4.appendChild(c4);
                div.appendChild(l4);

                let l5 = document.createElement("lable");
                l5.innerHTML = "electric: ";
                l5.style.color = "white";
                let c5 = document.createElement("input");
                c5.type = "radio";
                c5.name="combustibil";
                l5.appendChild(c5);
                div.appendChild(l5);

                let pretEstimat = document.createElement("div");
                pretEstimat.innerHTML = "Starea masinii " +
                    "(de la epava la ca noua):";
                pretEstimat.style.color = "white";
                div.appendChild(pretEstimat);

                let l6 = document.createElement("lable");
                l6.innerHTML = "";
                l6.style.color = "white";
                let c6 = document.createElement("input");
                c6.type = "range";
                l6.appendChild(c6);
                div.appendChild(l6);

                let l7 = document.createElement("lable");
                l7.innerHTML = "Alege tipul caroseriei:";
                l7.style.color = "white";
                let c7 = document.createElement("select");

                let op1 = document.createElement("option");
                op1.value = "decapotabila";
                op1.innerHTML = "decapotabila";
                c7.appendChild(op1);

                let op2 = document.createElement("option");
                op2.value = "sedan";
                op2.innerHTML = "sedan";
                c7.appendChild(op2);

                let op3 = document.createElement("option");
                op3.value = "hatchback";
                op3.innerHTML = "hatchback";
                c7.appendChild(op3);

                let op4 = document.createElement("option");
                op4.value = "hot rod";
                op4.innerHTML = "hot rod";
                c7.appendChild(op4);

                l7.appendChild(c7);
                div.appendChild(l7);

                let labelb4 = document.createElement("label");
                labelb4.style.color = "white";
                let button4 = document.createElement("input");
                button4.value = "trimite detalii masina";
                button4.type = "button";
                labelb4.appendChild(button4);
                div.appendChild(labelb4);

                let labelb3 = document.createElement("label");
                labelb3.style.color = "white";
                let button3 = document.createElement("input");
                button3.value = "iesi din cont";
                button3.type = "button";
                labelb3.appendChild(button3);
                div.appendChild(labelb3);

                button3.addEventListener('click', (e)=>{
                    let elems = document.querySelectorAll(".extra");
                    c1.remove();
                    l1.remove();
                    c2.remove();
                    l2.remove();
                    c3.remove();
                    l3.remove();
                    c4.remove();
                    l4.remove();
                    c5.remove();
                    l5.remove();
                    c6.remove();
                    l6.remove();
                    c7.remove();
                    l7.remove();
                    op1.remove();
                    op2.remove();
                    op3.remove();
                    tipCombustibil.remove();
                    pretEstimat.remove();
                    labelb4.remove();
                    labelb3.remove();
                    button3.remove();
                    button4.remove();
                    label1.style.display = "block";
                    label2.style.display = "block";
                    text1.style.display = "block";
                    text2.style.display = "block";
                    button1.style.display = "block";
                    button2.style.display = "block";
                    e.stopPropagation();
                })

            }
            else {
                alert("email sau parola incorecta");
            }
        }
        else{
            alert("email sau parola incorecta");
        }
    }
    else{
        alert("adresa de mail introdusa nu respecta formatul de mail")
    }
    e.stopPropagation();
})

button2.addEventListener("click", (e)=>{
    if(text1.value.match(mailformat)){
        if(!localStorage.getItem(""+text1.value)){
            if(text2.value.match(passwordformat)) {
                localStorage.setItem("" + text1.value, "" + text2.value);
                alert("cont creat cu succes");
            }
            else{
                alert("parola trebuie sa aiba cel putin 8 caractere!");
            }
        }
        else{
            alert("cont deja existent");
        }
    }
    else{
        alert("adresa de mail introdusa nu respecta formatul de mail")
    }
    e.stopPropagation();
})