function init(){
    document.getElementById("ertekeles_gomb").addEventListener("click", emailx);
    document.getElementById("ertekeles_gomb").addEventListener("click", legendx);
    document.getElementById("ertekeles_gomb").addEventListener("click", check);
    let emaily=0;
    let legendy=0;
}
function emailx(){

    let email=document.getElementById("email").value;
    if(!email.includes('@')){
        document.getElementById("hibaUzenet").innerText="Nem tartalmaz @ karaktert az email cím!";
        emaily=0;
    }
    else{
        document.getElementById("hibaUzenet").innerText="";
        emaily=1;
    }
}
function legendx(){

    let legend=document.getElementById("legend").value;
    if(legend.length<10){
        document.getElementById("hibaUzenet2").innerText="Az értékelés kevesebb mint 10 karaktert tartalmaz!";
        legendy=0;
    }
    else{
        document.getElementById("hibaUzenet2").innerText="";       
        legendy=1;
    }
    if(legend.length>50){
        document.getElementById("form").style.backgroundColor="green" 
    }
    else{
        document.getElementById("form").style.backgroundColor="red"
    }
}
function check(){
    if(emaily == 1 && legendy == 1){
        document.getElementById("sikerUzenet").innerText="Köszönjük az értékelést!";
    }
    else{
        document.getElementById("sikerUzenet").innerText=""; 
    }
}
document.addEventListener("DOMContentLoaded", init)