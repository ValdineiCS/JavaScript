var but=document.getElementById('but');
but.addEventListener('click', gerarTabuada)

function gerarTabuada(){
    var n1=document.getElementById('n1')
    var res=document.getElementById('seltab')
res.innerHTML=''
if(n1.value.length==0){
    alert('Por favor insira um número válido...')
}else{
    var n=Number(n1.value);
    for(let c=0;c<=10;c++){
        var opt=document.createElement('option')
        opt.text=`${n} x ${c} = ${n*c}`;
        res.append(opt);
    }
}

}