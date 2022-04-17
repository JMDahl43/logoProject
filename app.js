// Step 1: dragstart, dragover, drop
// Step 2: drag, dragend, dragenter, dragleave

const source = document.querySelector('.source');
const blue = document.querySelector('#blueDot');
const blueTarget = document.querySelector('#blueTarget');
const red = document.querySelector('#redDot');
const green = document.querySelector('#greenDot');
const blackLft = document.querySelector('#blackLftDot');
const blackRgt = document.querySelector('#blackRgtDot'); 

const targets = document.querySelectorAll('.targetDrop');
for(const target of targets) {
    console.log('Target: ', target);
    target.addEventListener('drop', dragDrop);
}


// Target Drop Listeners
blue.addEventListener('dragstart', dragStart);
blue.addEventListener('dragend', dragEnd);
red.addEventListener('dragstart', dragStart);
red.addEventListener('dragend', dragEnd);
green.addEventListener('dragstart', dragStart);
green.addEventListener('dragend', dragEnd);
blackLft.addEventListener('dragstart', dragStart);
blackLft.addEventListener('dragend', dragEnd);
blackRgt.addEventListener('dragstart', dragStart);
blackRgt.addEventListener('dragend', dragEnd);

function dragStart() {
    console.log('start');
}

function dragEnd() {
    console.log('end');
}

function dragDrop() {
    console.log('Event: ', 'drop');
}