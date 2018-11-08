var doc = document;
var figuresWhite = [
    'л', 'к', 'с', 'ф', 'К', 'с', 'к', 'л', 'п', 'п', 'п', 'п', 'п', 'п', 'п', 'п'
];
var chessCells = [];
var board = doc.createElement('div');
board.classList.add('chessTable');

var letters = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', ' '];

var boardHeader = doc.createElement('div');
boardHeader.classList.add('chessTable__header');

for (let i = 0; i < 10; i++) {
    let headerDiv = doc.createElement('div');
    headerDiv.classList.add('chessTable__header__item');
    headerDiv.innerText = letters[i];
    boardHeader.appendChild(headerDiv);
}
board.appendChild(boardHeader);

var boardMain = doc.createElement('div');
boardMain.classList.add('chessTable__main');
boardMain.classList.add('chessBoard');

var boardMainLeft = doc.createElement('div');
boardMainLeft.classList.add('chessBoard__left');
for (let i = 0; i < 8; i++) {
    let leftDiv = doc.createElement('div');
    leftDiv.classList.add('chessBoard__left__item');
    leftDiv.innerText = i +  1;
    boardMainLeft.appendChild(leftDiv);
}
boardMain.appendChild(boardMainLeft);

var boardMainCenter = doc.createElement('div');
boardMainCenter.classList.add('chessBoard__center');
var counter = 'white';
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        let centerDiv = doc.createElement('div');
        if (counter == 'white') {
            centerDiv.classList.add('chessBoard__center__item-white');
            counter = 'black';
        } else {
            centerDiv.classList.add('chessBoard__center__item-black');
            counter = 'white';
        }
        boardMainCenter.appendChild(centerDiv);
    }
    if (counter == 'white') {
        counter = 'black';
    } else {
        counter = 'white';
    }
}
boardMain.appendChild(boardMainCenter);
chessCells = boardMainCenter.querySelectorAll('div');



var boardMainRight = doc.createElement('div');
boardMainRight.classList.add('chessBoard__right');
for (let i = 0; i < 8; i++) {
    let rightDiv = doc.createElement('div');
    rightDiv.classList.add('chessBoard__right__item');
    rightDiv.innerText = i +  1;
    boardMainRight.appendChild(rightDiv);
}
boardMain.appendChild(boardMainRight);

board.appendChild(boardMain);

var boardFooter = doc.createElement('div');
boardFooter.classList.add('chessTable__footer');

for (let i = 0; i < 10; i++) {
    let footerDiv = doc.createElement('div');
    footerDiv.classList.add('chessTable__footer__item');
    footerDiv.innerText = letters[i];
    boardFooter.appendChild(footerDiv);
}
board.appendChild(boardFooter);

doc.body.appendChild(board);

for (let i = 0; i < 16; i++) {
    chessCells[i].innerText = figuresWhite[i];
}
var counterBackwards = 0;
for (let i = 63; i > 63 - figuresWhite.length; i--) {
    chessCells[i].innerText = figuresWhite[counterBackwards];
    counterBackwards++;
}