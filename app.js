for(let i = 1; i < 50; i++){
    document.getElementById('age').innerHTML += "Le capitaine a "+i+" ans";
    if(i <= 18){
        document.getElementById('age').innerHTML += ", Le capitaine est en pleine forme<br>"
    }
    else if (i <= 50){
        document.getElementById('age').innerHTML += ", Le capitaine n'est pas très vieux<br>"
    }
}