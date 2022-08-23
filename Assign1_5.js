function fibonacci(no1) {
    var i;
    var a = 0, b = 1, f = 1;
    for (i = 2; i <= no1; i++) {
        f = a + b;
        a = b;
        b = f;
        console.log(f);
        // this.fibos.push(f);
    }
}
;
fibonacci(21);
