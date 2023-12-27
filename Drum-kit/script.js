function sounds(){
    if(document.activeElement.id=="w"){
        var audio=new Audio("Sound/ken.wav");
        audio.play();
    }
    else if(document.activeElement.id=="a"){
        var audio=new Audio("Sound/shot.wav");
        audio.play();
    }
    else if(document.activeElement.id=="s"){
        var audio=new Audio("Sound/kick-drum.wav");
        audio.play();
    }
    else if(document.activeElement.id=="d"){
        var audio=new Audio("Sound/snare.wav");
        audio.play();
    }
    else if(document.activeElement.id=="j"){
        var audio=new Audio("Sound/crash.wav");
        audio.play();
    }
    else if(document.activeElement.id=="k"){
        var audio=new Audio("Sound/virus-kick.wav");
        audio.play();
    }
}

document.addEventListener("keypress",function(event){
    if(event.key=="w"){
        var audio=new Audio("Sound/ken.wav");
        audio.play();
    }
    else if(event.key=="a"){
        var audio=new Audio("Sound/shot.wav");
        audio.play();
    }
    else if(event.key=="s"){
        var audio=new Audio("Sound/kick-drum.wav");
        audio.play();
    }
    else if(event.key=="d"){
        var audio=new Audio("Sound/snare.wav");
        audio.play();
    }
    else if(event.key=="j"){
        var audio=new Audio("Sound/crash.wav");
        audio.play();
    }
    else if(event.key=="k"){
        var audio=new Audio("Sound/virus-kick.wav");
        audio.play();
    }
})