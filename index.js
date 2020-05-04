module.exports = class Search{
    constructor(){}
    linear(arr, elem){
        for(var i = 0; i < arr.length; i++){
            if(arr[i] === elem) return i;
        }
        return -1;
    }
    binary(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
   }
}

