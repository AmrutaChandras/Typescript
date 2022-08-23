function DisplayFactor(no1) {
    var i = 1;
    for (i; i < +no1; i++) {
        if (no1 % i == 0) {
            console.log(i);
        }
    }
}
DisplayFactor(20);
