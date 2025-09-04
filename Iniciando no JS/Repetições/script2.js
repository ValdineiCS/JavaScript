var but=document.getElementById('but').addEventListener('click', gerarTabuada);

function gerarTabuada(){
    var n1=document.getElementById('n1');
    var res=document.getElementById('seltab');

    if(n1.value.length==0){
        alert( 'Insira um número para iniciarmos a contagem')
    }else{
        res.innerHTML=''
       let n=Number(n1.value);
       for(let c=0; c<=10; c++){
        let opt=document.createElement('option');
        opt.text=`${n} x ${c} = ${n*c}`;
        res.appendChild(opt);
       }
    }

}