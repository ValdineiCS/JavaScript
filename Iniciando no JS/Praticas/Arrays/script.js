/*let num=[8,5,9,6,0,3];
num[2]=7
num.push(2)
console.log(`A array tem os seguintes numeros: ${num}`);
console.log(`A array tem ${num.length} elementos`);
console.log(`A array em ordem fica assim ${num.sort()}`)
console.log(`Aqui adicionamos o numero 1 a Array ${num.push(1)}`)*/

/*let num=[8,5,9,6,0,3];

for(let c=0; c<num.length; c++){
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}*/

let num=[8,5,9,6,0,3];
num.push(2, 7)
num.sort()
for(let pos in num){
    console.log(`A posiçãoo ${pos} tem o valor ${num [pos]}`)
   
}

 console.log(num.indexOf())