function teste(functionCallback){
    console.log("função teste");
    functionCallback();
}

teste(function(){
    console.log("função anonima de callback");
})
