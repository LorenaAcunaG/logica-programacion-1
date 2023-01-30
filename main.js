alert('Ingresa tres numeros')

let num1 = Number(prompt("Ingrese el primer numero"));
let num2 = Number(prompt("Ingrese el segundo numero"));
let num3 = Number(prompt("Ingrese el tercer numero"));
let numerosArray = [];
//20, 58, 33

if(num1!=num2&&num2!=num3&&num1!=num3){
    //los numeros son diferentes
    if(num1 < num2 && num2 < num3){
        let numerosArray = [num1, num2, num3];
        console.log (`Los numeros odenados de menor a mayor son: ${numerosArray}`);
        console.log (`Los numeros odenados de mayor a menor son: ${numerosArray.reverse()}`);

    }else if(num1 < num3 && num3 < num2){
        let numerosArray = [num1, num3, num2];
        console.log (`Los numeros odenados de menor a mayor son: ${numerosArray}`);
        console.log (`Los numeros odenados de mayor a menor son: ${numerosArray.reverse()}`);

    }else if(num2 < num1 && num1 < num3 ){
        let numerosArray = [num2, num1, num3];
        console.log (`Los numeros odenados de menor a mayor son: ${numerosArray}`);
        console.log (`Los numeros odenados de mayor a menor son: ${numerosArray.reverse()}`);

    }else if(num2 < num3 && num3 < num1 ){
        let numerosArray = [num2, num3, num1];
        console.log (`Los numeros odenados de menor a mayor son: ${numerosArray}`);
        console.log (`Los numeros odenados de mayor a menor son: ${numerosArray.reverse()}`);

    }else if(num3 < num1 && num1 < num2 ){
        let numerosArray = [num3, num1, num2];
        console.log (`Los numeros odenados de menor a mayor son: ${numerosArray}`);
        console.log (`Los numeros odenados de mayor a menor son: ${numerosArray.reverse()}`);

    }else{
        let numerosArray = [num3, num2, num1];
        console.log (`Los numeros odenados de menor a mayor son: ${numerosArray}`);
        console.log (`Los numeros odenados de mayor a menor son: ${numerosArray.reverse()}`);
    }

}else if(num1===num2 && num2===num3){

        console.log(`Los tres numeros ingresados son iguales`); 
        
    }else if (num2===num3){
        
        console.log(`El numero 2 y el numero 3 ingresados son iguales`);
        
    }else if(num1===num3){
        
        console.log(`El numero 1 y el numero 3 ingresados son iguales`);
        
    }else{
        console.log(`los numeros 1 y 2 ingresados son iguales`);
}

