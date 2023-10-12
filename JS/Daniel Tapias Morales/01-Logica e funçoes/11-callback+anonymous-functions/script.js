function teste(functionCallback){
    console.log("função teste");
    console.log(functionCallback)
    functionCallback();
}

function func(){
    console.log("função anonima de callback");
}

teste(func);
