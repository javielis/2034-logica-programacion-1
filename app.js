let numeroSecreto = Math.floor (Math.random()*100)+1;
let numeroUsuario = 0; //se declara la variable al inicio para deps utilizar esas variables 
let intentos  = 1;
// let palabrasVeces = 'vez';
let maxIntento = 5;

while (numeroUsuario != numeroSecreto) {
   numeroUsuario = parseInt(prompt('Me indicas un numero entre 1 y 100 por favor:'));

    console.log(numeroUsuario);

    //aqui comienza ya la condicional 
    if (numeroUsuario == numeroSecreto) {
        //acertamos fue verdadera la condicion
    alert(`Acertaste, el numero numero es: ${numeroUsuario}. lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
        //no acertamos no fue verdadera la condicion
    } else {
        //aqui comienza como unas condicionales dentro de otras condicionales
        if (numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        //la condicion no se cumplio
        // alert('lo siento, no acertaste el numero');
       
       //incrementamos el contador cuando no acierta
        // intentos = intentos + 1; formas 1
        // intentos += 1; forma  2
        intentos ++; //forma 3 mas usada
        palabrasVeces = 'veces';
        if(intentos > 5) {
            alert(`Llegaste al numero de ${maxIntento} intentos`);
            break;// con esto hacemos que se corte la cajita como que se cumple la condicion y hasta alli llega.

        }
    }

}
