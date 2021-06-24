function generatorHexColor(){
    let hexNum = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let color = '#';

    for(let i = 0; i < 6; i++){
        let num = Math.floor(Math.random() * 15);
        let num2 = hexNum[num];
        color +=num2;
        
    }
    document.querySelector('.container').style.backgroundColor = color;
    document.querySelector('#color').style.color = '#fff';
    document.querySelector('#color').innerHTML = color;


}

