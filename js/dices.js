function RollDice() {
    const el = event.target || event.srcElement;
    const id = el.id;
    console.log(id);
    let img = document.querySelector('.result');
    document.getElementById('msgResult').innerHTML = '';
    document.getElementById('resultDice').innerHTML = ``;
    img.style.cssText = 'background-image: url(gifs/dices.gif); height: 260px; background-size: cover';
    setTimeout(function(){
        img.style.cssText = 'background-image: none; height: 260px; background-size: cover;';
        let resDado = document.getElementById('resultDice').value;
    let num = 0;
    resDado = `Rolled ${id}`;
    switch (id) {
        case 'd4':
            num = 4
            break;
        case 'd6':
            num = 6
            break;
        case 'd8':
            num = 8
            break;
        case 'd10':
            num = 10
            break;
        case 'd12':
            num = 12
            break;
        case 'd20':
            num = 20
            break;
    }
    numSorteado = Math.floor(Math.random() * num + 1)
    document.getElementById('msgResult').innerHTML = resDado + `:<br>Fell in:`;
    document.getElementById('resultDice').innerHTML = `${numSorteado}`;
    },2600);
    
}
