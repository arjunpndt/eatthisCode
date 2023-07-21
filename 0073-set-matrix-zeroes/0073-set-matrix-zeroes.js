/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var m= matrix.length,n= matrix[0].length
    var arr=new Array(m).fill(1), arr2 = new Array(n).fill(1);
    for(let i=0;i<m;i++){
        for(j=0;j<n;j++){
            if(matrix[i][j]==0){
                arr[i]=0;
                arr2[j]=0;
            }
        }
    }
     for(let i=0;i<m;i++){
        for(j=0;j<n;j++){
            if(arr[i]==0 || arr2[j]==0){
                matrix[i][j]=0;
            }
        }
    }
    console.log(arr)
};