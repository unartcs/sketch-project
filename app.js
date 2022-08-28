const divContainer = document.querySelector('.grid-container');
// const brushColor = document.querySelector('.color-button')
color = 'red';
const colorButton = document.querySelector('.color-button');
const clearButton = document.querySelector('.clear-button');
const eraserButton = document.querySelector('.eraser-button')
function makeDiv(size) {
    deleteDiv = document.querySelectorAll('.grid-1')
    deleteDiv.forEach(function (deleteDiv) {
        deleteDiv.parentNode.removeChild(deleteDiv);
    });
    for (let i = 0; i < size; i++) {
        const div = document.createElement(`div`);
        div.classList.add('grid-1')
        divContainer.appendChild(div);
    }
    spreadDiv(size)

}

function spreadDiv(x) {
    const getDiv = document.querySelectorAll('.grid-1')
    getDiv.forEach(function (z) {
        for (let i = 0; i < x; i++) {
            const div = document.createElement('div')
            div.classList.add('grid-1')
            z.appendChild(div);
        }
    })
    const getGrid = document.querySelectorAll('.grid-1')
    getGrid.forEach((getGrid) => {
        getGrid.addEventListener('mouseover', function (e) {
            getGrid.style.backgroundColor = color;
        }
        )
    }
    )


}

function chooseGrid() {
    button = document.querySelector('.grid-button')
    button.addEventListener('click', function () {
        tiles = prompt('How many tiles do you want? (Max 100)');
        if (tiles > 0 && tiles <= 100) {
            // button.style.height = '0px';
            //button.classList.add('hide')
            makeDiv(tiles);
        } else chooseGrid();
    })
}

colorButton.addEventListener('click', function () {
    color = prompt('Choose a color!');
    if (typeof color == String) {
        return color;
    }
})

clearButton.addEventListener('click', function () {
    const getGrid = document.querySelectorAll('.grid-1')
    getGrid.forEach((getGrid) => {
            getGrid.style.backgroundColor = 'black';
        }
        )
    }
)

eraserButton.addEventListener('click', function () {
    color = 'black';
});


chooseGrid();

// makeDiv(16);