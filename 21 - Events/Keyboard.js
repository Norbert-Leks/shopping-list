const itemInput = document.getElementById('item-input');

const onKeyPress = e => {
    console.log('key press');
}

const onKeyUp = (e) => {
    console.log('keyup');
}
const onKeyDown = (e) => {
    // key
    // console.log(e.key);
    // document.querySelector('h1').innerText = e.key;

    // KeyCode
    if (e.keyCode === 13){
        alert('You pressed enter');
    }
    // Code
    if(e.code =='Digit1'){
        console.log('You pressed 1');
    }

    if(e.repeat) {
        console.log('You are holding down ' + e.key);
    } else{
        console.log('You are not pressing anything');
    }
    console.log('Shift: ' + e.shiftKey);
    console.log('Ctrl: ' + e.ctrlKey);
    console.log('Alt: ' + e.altKey);

    if (e.shiftKey && e.key === 'K'){
        console.log('You hit shift +K');
    }

}


itemInput.addEventListener('keypress', onKeyPress);
itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);