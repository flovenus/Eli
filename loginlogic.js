let k = "2gH0sTscr0ssEDther0AD";

function openHtml(){
    window.location.href='logbasepage.html';
}

function getPassword(){
    let p = document.getElementById('passbox').value;
    let i = p;
    if (i != k){
        console.log(p);
        console.log("Das war falsch");
    }
    else {
        console.log("Das war richtig");
        openHtml();
    }
}