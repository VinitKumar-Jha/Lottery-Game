function genTicket(num){
    let arr = new Array(num);
    for(let i = 0; i<=num; i++){
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

function sum(arr) {
    return arr.reduce((sum, val)=> sum + val, 0
     )        
}

export {genTicket, sum};