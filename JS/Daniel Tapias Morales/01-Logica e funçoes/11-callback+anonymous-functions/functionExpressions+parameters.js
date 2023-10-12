const teste = function(functionCallback_func){
    console.log("função teste");
    console.log(functionCallback_func)
    functionCallback_func("Passado por paramentro para função: '_func'");
}

const _func = function(parameters){
    console.log("função anonima de callback");
    console.log(parameters);
}

//func();
teste(_func);
