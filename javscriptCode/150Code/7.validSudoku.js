/*
7. Valid Sudoku

📌 Problem: Check if a 9x9 Sudoku board is valid (numbers follow Sudoku rules).
📝 Example:
🔹 A valid board must have numbers 1-9 in each row, column, and 3x3 box without repetition.
*/


function sudoku(board) {
    try {
        const rows = new Array(9).fill(null).map(() => new Set());
        const cols = new Array(9).fill(null).map(() => new Set());;
        const boxes = new Array(9).fill(null).map(() => new Set());;

        for (let row = 0; row < 9; row++) {
            if (!rows[row]) rows[row] = new Set();
            if (!cols[row]) cols[row] = new Set();
            if (!boxes[row]) boxes[row] = new Set();
            for (let col = 0; col < 9; col++) {
                const num = board[row][col];
                const boxIndex = Math.floor(row/3) * 3 + Math.floor(col/3);
                if (num === '.') continue;
                
                if (rows[row].has(num) || cols[col].has(num) || boxes[boxIndex].has(num)) {

                    return false;
                }
                
                rows[row].add(num);
                cols[col].add(num);
                boxes[boxIndex].add(num);
            }
            
        }
        return true;
    } catch (error) {
        console.log(error);
    }
}
const validSudoku = sudoku([
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]);
console.log(validSudoku);
