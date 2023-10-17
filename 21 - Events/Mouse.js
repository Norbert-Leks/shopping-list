const logo = document.querySelector('img');

const onClick = () => console.log('click event');

const onDoubleClick = () => {if(document.body.style.backgroundColor != 'purple'){

    document.body.style.backgroundColor = 'purple';
    document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
};

const onRightClick = () => console.log('right click event');
const onMouseDown = () => console.log('mouse down evenet');
const onMouseUp = () => console.log('mouse up evenet');
const onMouseWheel = () => console.log('mouse wheel evenet');
const onMouseOver = () => console.log('mouse over evenet');
const onMouseOut = () => console.log('mouse out evenet');
const onDragStart = () => console.log('mouse drag evenet');
const onDrag = () => console.log('mouse drag evenet');
const onDragEnd = () => console.log('drag End evenet');

// Event Listneres
logo.addEventListener('click',onClick);
logo.addEventListener('dblclick',onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('dragstart', onDrag);
logo.addEventListener('dragstart', onDragEnd);