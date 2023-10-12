const teste = function(functionCallback){
    console.log("função teste");
    console.log(functionCallback)
    functionCallback();
}

const func = function(){
    console.log("função anonima de callback");
}

//func();
teste(func);
