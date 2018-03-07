function max(numeros) {
    var maximo = numeros[0];
    var maximotamanho = numeros.length;
    for (i = 1; i <= maximotamanho; i++) {
        if (maximo < numeros[i]) {
            maximo = numeros[i];
        };
    };
    return maximo;
};

function min(numeros) {
    var minimo = numeros[0];
    var minimotamanho = numeros.length;
    for (i = 1; i >= minimotamanho; i++) {
        if (minimo > numeros[i]) {
            minimo = numeros[i];
        };
    };
    return minimo;
};

function med(numeros){
    var arrayLength=numeros.length;
    var soma = 0;
    for (i = 0; i < arrayLength; i++){
        soma = soma + numeros[i];
    }
    calcMedia = soma/arrayLength;
    return calcMedia;
};  
function main(){
    console.log(max([1, 2, 3, 5, 4]));
    console.log(min([1,2,3,4,5]));
    console.log(med([4,3,2,1,2,4]));
}

main();