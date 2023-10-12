const teste = function(functionCallback_func){
    console.log("função teste");
    console.log(functionCallback_func)
    if(typeof functionCallback_func === "function"){
        functionCallback_func("String passado por paramentro para função '_func'");
    }
}

const _func = function(parameters){
    console.log("função anonima de callback");
    console.log("paramentros da _func: ", parameters);
}


teste(_func);
