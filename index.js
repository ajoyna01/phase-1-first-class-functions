function receivesAFunction(spy) {
    spy();
}
function returnsANamedFunction(){
    return receivesAFunction;
}
function returnsAnAnonymousFunction() {
    return function() {
    }
}
// function test() {
//     receivesAFunction( () => {
//             console.log( "Hello world!")
//     });
// }

// test();

// returnsAnAnonymousFunction(() => {

// });







// f = returnsAnAnonymousFunction();
// f();