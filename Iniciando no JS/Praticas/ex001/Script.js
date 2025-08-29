var data=new Date();
var hora=data.getHours();


function horaDia(){
    var hr=document.getElementById('hora');
    var img=document.getElementById('foto');
    if(hora<=12){
        hr.innerHTML=`A hora atual é ${hora}h! Bom dia.`;
        img.src="manhã.png"
        document.body.style.background="#e4f900ff"
    }else if(hora<=18){
        hr.innerHTML=`A hora atual é ${hora}h! Boa tarde.`
        img.src="tarde.png"
        document.body.style.background="#bc6100ff"
    }else{
        hr.src.innerHTML=`A hora atual é ${hora}h! Boa noite`
        img="noite.png"
        document.body.style.background="#061f26ff"
    }
}