'use strict';

const chessBoard = {
    containerElement: document.querySelector('.chess'),
    size: 8,
    letters: ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],


    drawBoard() {
        this.containerElement.innerHTML = '';

        let isDark = true;
        for (let row = 0; row <= this.size; row++) {
            const trElm = document.createElement('tr');
            this.containerElement.appendChild(trElm);

            for (let col = 0; col <= this.size; col++) {
                const cell = document.createElement('td');
                trElm.appendChild(cell);

                if (col == 0 && row < this.size) {
                    cell.classList.add('labelCell');
                    cell.innerText = this.size - row;
                    continue;
                }

                if (row == this.size) {
                    cell.classList.add('labelCell');
                    cell.innerText = this.letters[col];
                    continue;
                }

                if (col != 1 || (col == 1 && this.size % 2)) {
                    isDark = !isDark;
                }

                if (isDark) {
                    cell.classList.add('darkCell');
                } else {
                    cell.classList.add('lightCell');
                }
            }
        }
    }
}

chessBoard.drawBoard();
