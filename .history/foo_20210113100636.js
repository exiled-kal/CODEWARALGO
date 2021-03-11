const foo = () => {
    let a = b = 10;
    a++;
    return a;
}
foo ();

console.log(foo(a));
console.log(foo(b));