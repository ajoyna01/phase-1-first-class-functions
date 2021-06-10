function receivesAFunction(spy) {
    spy();
}
function returnsANamedFunction(){
    return receivesAFunction;
}

// function test() {
//     receivesAFunction( () => {
//             console.log( "Hello world!")
//     });
// }

// test();

// returnsAnAnonymousFunction(() => {

// });





function returnsAnAnonymousFunction() {
    return function() {
    }
}

// f = returnsAnAnonymousFunction();
// f();