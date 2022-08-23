var Maximum = [23, 89, 6, 29, 56, 45, 77, 32];
var i = 0;
var max = Maximum[0];
for (i = 1; i <= Maximum.length; i++) {
    if (Maximum[i] > max) {
        max = Maximum[i];
    }
}
console.log("Maxmum number is: " + max);
