/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var arr = []
    for(let i=0;i<numRows;i++){
        var temp1=[]
        for(let j=0;j<=i;j++){
            if(j==0 || j==i) 
                temp1.push(1)
            else {
                temp1.push(arr[i-1][j-1]+arr[i-1][j])
            }
        }
        arr.push(temp1)
    }
    return arr;
};