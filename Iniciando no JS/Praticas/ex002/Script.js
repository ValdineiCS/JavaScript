var botao=document.getElementById("btn");
botao.addEventListener('click', verificar);

function verificar(){
var data= new Date();
var ano=data.getFullYear();
var anoI=document.getElementById('txtano')
var res=document.getElementById('res');
if(anoI.value.length == 0 || anoI.value>ano){
    res.innerHTML="Por favor insira o ano corretamente";
    res.style.color="red";
    res.style.textAlign="center"
}else{
    var fsex=document.getElementsByName('radsex')
    var idade=Number(ano-anoI.value);
    var genero="";
    var img=document.createElement('img');
    img.setAttribute('id', "foto")
    
    if(fsex[0].checked){
        genero="Masculino";
    }
    
    else if(fsex[1].checked){
        genero="Feminio";
    }
     res.innerHTML=`Você é do sexo ${genero} e tem ${idade} anos de idade`
    res.style.color="blue"
    res.style.textAlign="center"
}

}