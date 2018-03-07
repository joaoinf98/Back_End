function imcCalc(peso,altura){
    imc = peso/(altura*altura);
    if (imc < 18.5){
        console.log("abaixo peso");
    }
    else if (imc >= 18.5 && imc < 25){
        console.log("no peso normal");
    }
    else if (imc > 25 && imc < 30){
        console.log("Estas acima do peso");
    } 
    else if (imc > 30){
        console.log("Obeso");
    }  
};
function invert(str) {
    var result = '',
        length = str.length;
    while (length--) {
        result += str[length];
    }
    return result;
}
};
function main(){
    imcCalc(78,1.95);
    invert(Halo);
}
main();