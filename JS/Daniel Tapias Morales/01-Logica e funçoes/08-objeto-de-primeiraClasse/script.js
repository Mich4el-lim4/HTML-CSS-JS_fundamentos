function fn(cb){
    console.log("executar ação de cllback");
    console.log();
    cb();
}

fn(function(){
    console.log("função passada por paramentro");
});
