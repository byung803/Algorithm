// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    //sol#1
    let results = []; 
    let count = 1;
    let startColumn = 0, endColumn = n-1, startRow = 0, endRow = n-1; 

    for (let i = 0; i<n; i++) {
        results.push([]);
    }    
    
    while( startColumn <= endColumn && startRow <= endRow ) {
        // Top row
        for(let i= startColumn; i<=endColumn; i++) {
            results[startRow][i] = count;
            count++; 
        }
        startRow++;

        //Right column
        for(let i=startRow; i<=endRow; i++) {
            results[i][endColumn] = count;
            count++;
        }
        endColumn--; 
       
        //Bottom row
        for(let i=endColumn; i>=startColumn; i--){
            results[endRow][i] = count;
            count++;
        }
        endRow--; 
       
        //Left column
        for(let i=endRow; i>=startRow; i--) {
            results[i][startColumn] = count;
            count++;
        }
        startColumn++;         
       
    }
    
    return results;
}

module.exports = matrix;

    // //mySol
    // let rowStart=0 , rowEnd=n-1 , colStart=0 , colEnd=n-1;
    // let matrix= new Array(n); 
    // for (let i=0; i<n; i++) {
    //         matrix[i] = new Array(n);             
    // }    
    
    // let count = 1; 
    //  while(count <= n*n) {        
    //         for(let i=colStart; i<=colEnd; i++) {
    //             matrix[rowStart][i] = count; 
    //             count++;                
    //         }
    //         rowStart++;

    //         for(let i = rowStart; i<=rowEnd; i++) {
    //             matrix[i][colEnd] = count;
    //             count++;                 
    //         }
    //         colEnd--;

    //         for(let i = colEnd; i>=colStart; i--) {
    //             matrix[rowEnd][i] = count;
    //             count++;                 
    //         }
    //         rowEnd--;

    //         for(let i = rowEnd; i>=rowStart; i--) {
    //             matrix[i][colStart] = count;
    //             count++;                 
    //         }
    //         colStart++;
    // }
    // return matrix;