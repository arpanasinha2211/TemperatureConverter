function celsiusHandler(){
    var cel=+document.getElementById('celsius').value;
    // console.log(cel)
    document.getElementById('fahrenheit').value=cToF(cel);
    document.getElementById('Kelvin').value=(cel+273.15).toFixed(2);
    loadImage();
}
function cToF(cVal){
    var fVal = (cVal*9/5)+32;
    return fVal.toFixed(2);
}
function fahrenheitHandler(){
    var fah=+document.getElementById('fahrenheit').value;
    document.getElementById('celsius').value=fToC(fah);
    // console.log(fToC(fah)+273)
    document.getElementById('Kelvin').value=+fToC(fah)+273.15;
    loadImage();
}
function fToC(fVal){
    var cVal=(fVal-32)*5/9;
    return cVal.toFixed(2);
}
function KelvinHandler(){
    var kel=+document.getElementById('Kelvin').value;
    document.getElementById('fahrenheit').value=cToF(kel-273.15);
    document.getElementById('celsius').value=(kel-273.15).toFixed(2);
    loadImage();
}
function loadImage(){
    var cel=+document.getElementById('celsius').value;
    if(cel<15){
        document.getElementById('main').style.backgroundImage='url(assets/cold.jpg)';
    }
    else if(cel<35){
        document.getElementById('main').style.backgroundImage='url(assets/normal.jpg)';
    }
    else{
        document.getElementById('main').style.backgroundImage='url(assets/hot.jpg)';
    }
}