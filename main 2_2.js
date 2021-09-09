class QueenAttack {
    constructor(qR, qC, oR, oC) {
        this.qR = qR;
        this.qC = qC;
        this.oR = oR;
        this.oC = oC;
    }

    canAttack(qR, qC, oR, oC) {
        // If queen and the opponent are in the same row
        if (qR == oR)
            console.log('true');

        // If queen and the opponent are in the same column
        if (qC == oC)
            console.log('true');

        // If queen can attack diagonally
        if (Math.abs(qR - oR) == Math.abs(qC - oC))
            console.log('true');

        // Opponent is safe
        console.log('false');
    }
}
const chess = new QueenAttack();
chess.canAttack(1, 5, 3, 4)