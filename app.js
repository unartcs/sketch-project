const divContainer = document.querySelector('.grid-container');
const colorButton = document.querySelector('.color-button');
const clearButton = document.querySelector('.clear-button');
const eraserButton = document.querySelector('.eraser-button');
const rgbButton = document.querySelector('.rgb-button');
// const ftbButton = document.querySelector('.ftb-button')
let randomColor = false;
let eraser = false;
let ftb = false;
let bgColor = colorButton.value;
const getGridT = document.querySelectorAll('.grid-1')
let colors = bgColor.split('')

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
            if (randomColor == true && eraser == false) {
                getGrid.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
            } else if (eraser == true) {
                getGrid.style.backgroundColor = 'white';
            } 
            // else if (ftb == true) {
            //     colors = (bgColor.match(/[A-Za-z0-9]{2}/g).map(function(v) { return parseInt(v, 16) }).join(","))
            //     colors = colors.split(',')
            //     for (let i = 0;i < 1; i++) {

            //     }
            // }
            else {
                getGrid.style.backgroundColor = bgColor;
            }
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

colorButton.addEventListener('input', function () {
    bgColor = colorButton.value;
    return bgColor;
})

clearButton.addEventListener('click', function () {
    const getGrid = document.querySelectorAll('.grid-1')
    getGrid.forEach((getGrid) => {
        getGrid.style.backgroundColor = 'white';
    }
    )
}
)


rgbButton.addEventListener('click', function () {
    if (randomColor == false) {
        rgbButton.style.boxShadow = 'inset 0 0 100px rgb(1, 231, 212)';
        eraserButton.style.boxShadow = 'inset 0 0 0px #000000';
        eraser = false;
        randomColor = true;
    }
    else {
        rgbButton.style.boxShadow = 'inset 0 0 0px #000000';
        randomColor = false;
    }
})


eraserButton.addEventListener('click', function () {
    if (eraser == false) {
        eraserButton.style.boxShadow = 'inset 0 0 100px rgb(1, 231, 212)';
        bgColor = 'white'
        rgbButton.style.boxShadow = 'inset 0 0 0px #000000';
        randomColor = false;
        eraser = true;
    }
    else {
        eraserButton.style.boxShadow = 'inset 0 0 0px #000000';
        bgColor = colorButton.value;
        eraser = false;
    }
});

// ftbButton.addEventListener('click',function() {
//     if (ftb == false) {
//         ftb = true;
//         ftbButton.style.boxShadow = 'inset 0 0 100px rgb(1, 231, 212)';
//         console.log(colors)
//     } else {
//         ftbButton.style.boxShadow = 'inset 0 0 0px #000000';
//     }
// })


chooseGrid();

makeDiv(16);