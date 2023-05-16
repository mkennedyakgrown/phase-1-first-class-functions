function receivesAFunction(funcToCall) {
    funcToCall();
}

function returnsANamedFunction() {
    return function aNamedFunction(){};
}

function returnsAnAnonymousFunction() {
    return function() {};
}