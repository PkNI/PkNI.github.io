function GoTo(alvo, a){
    url = window.location.href.toString();
    if(a.id == "inicio"){
        window.location.reload();
    }else{
        tela = document.getElementById['Tela'];
        tela.src = window.location.href;
    }
    
}