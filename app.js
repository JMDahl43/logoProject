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
let dotsCorrect = 0;

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

// Loop through Target Divs
for(const target of targets) {
    target.addEventListener('dragover', dragOver);
    target.addEventListener('dragenter', dragEnter);
    target.addEventListener('dragleave', dragLeave);
    target.addEventListener('drop', dragDrop);
}

function dragStart(e) {
    console.log('Drag Start: ', e.target.id);
    e.dataTransfer.setData('text/plain', e.target.id);
}

function dragEnd() {
    console.log('End');
    this.className = '';
}

function dragOver(e) {
    e.preventDefault();
    //console.log('Over');
}

function dragEnter(e) { 
    e.preventDefault();
    //console.log('Enter');
}
function dragLeave() {
    //console.log('Leave');
    this.className = 'targetDrop';
}

 function dragDrop(e) {
    //console.log('Drop');
    const id = e.dataTransfer.getData('text/plain');
    console.log('ID', id);

    dotsCorrect += 1;
    if(dotsCorrect === 5) {
        document.querySelector('.source').innerHTML = '<h1>Congratulations, Logo Complete!</h1>';
    }
    console.log(dotsCorrect);

    // Get the Dot to Stay in Target
    if (id === 'blueDot')
        this.append(blue);
    else if (id === 'redDot')
        this.append(red)
    else if (id === 'greenDot')
        this.append(green)
    else if (id === 'blackLftDot')
        this.append(blackLft)
    else if (id === 'blackRgtDot')
        this.append(blackRgt)
    
}