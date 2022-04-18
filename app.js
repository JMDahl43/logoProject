// Loop through Source Dots
const dots = document.querySelectorAll('.dot');
for(const dot of dots) {
    dot.addEventListener('dragstart', dragStart);
    dot.addEventListener('dragend', dragEnd);
}

// Loop through Target Divs
const targets = document.querySelectorAll('.targetDrop');
for(const target of targets) {
    target.addEventListener('dragover', dragOver);
    target.addEventListener('dragenter', dragEnter);
    target.addEventListener('dragleave', dragLeave);
    target.addEventListener('drop', dragDrop);
}

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
}

function dragEnd() {
    this.className = '';
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) { 
    e.preventDefault();
}

function dragLeave() {
    this.className = 'targetDrop';
}

let dotsCorrect = 0;

function dragDrop(e) {
    const id = e.dataTransfer.getData('text/plain');

    // get the draggable element
    const draggedDot = document.getElementById(id);
    const color = id.replace('Dot', '');

    if (color === e.target.id.replace('Target', '')) {

        // Add dot tot he drop target since it is the correct color
        e.target.appendChild(draggedDot);
        dotsCorrect += 1;
        setTimeout(() => {
            if(dotsCorrect === 5) {
                document.querySelector('.source').innerHTML = '<h1>Congratulations, Logo Complete!</h1>';
            }
        }, 1000)

    }
}

// Reload the Page to Reset the Logo
const resetBtn = document.querySelector('button');
resetBtn.addEventListener('click', resetLogo);

function resetLogo() {
    location.reload();
}