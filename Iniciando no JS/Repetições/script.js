 var btn=document.getElementById("btn");
btn.addEventListener('click',contadorPassos)

function contadorPassos(){
    var inicio=document.getElementById("inicio");
    var fim=document.getElementById('fim');
    var passo=document.getElementById('contador');
   var res=document.getElementById('res')

 res.innerHTML=""
if(inicio.value.length==0 || fim.value.length==0){
    alert("Dados inseridos incorretamentes. Por favor verificar")
}

 
   else{
    var i=Number(inicio.value);
    var f=Number(fim.value);
    var p=Number(passo.value);

  if(p<=0){
    alert("passos não inseridos, considerado passo 1.")
    p=1;
    
   }
    if(i<f){
for(var c=i; c<=f ; c+=p){
    res.innerHTML+=` ${c} \u{1f449} `
    }

     }else{
        for(let c=i;c>=f;c-=p){
            res.innerHTML+=`${c} \u{1f449}`;
        }
     }
     res.innerHTML+=`\u{1f3c1}`;
    
   
}
 }