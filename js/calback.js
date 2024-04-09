const arrNum = [2, 4, 6, 8, 10];

function arrMod(callback, array, param){
    console.log("Modify array");
    let modifyArr = callback(array, param);
    console.log("The function callback has already stoped");
    console.log(modifyArr);
}

function callbackPower(arr, pow){
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i] ** pow;
    }
    return arr.join(' - ');
}

arrMod(callbackPower, arrNum, 2);