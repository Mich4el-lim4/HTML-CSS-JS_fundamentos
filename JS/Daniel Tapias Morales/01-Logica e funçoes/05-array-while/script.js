function generateRandomInteger(max){
    return parseInt(Math.random() * max)
}

let array = [];
while(array.length <= 20){
    let randomNumber = generateRandomInteger(30);

    if(array.indexOf(randomNumber) < 0){
        array.push(randomNumber);
    } else{
        console.log(randomNumber, " já existe no array");
    }
}

console.log(array);
