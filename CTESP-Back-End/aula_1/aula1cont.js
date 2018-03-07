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
function main(){
    console.log(max([1, 2, 3, 5, 4]));
}