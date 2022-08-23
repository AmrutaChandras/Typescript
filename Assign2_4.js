//import { SSL_OP_NO_TLSv1_1 } from "constants";
var reminder;
var total;
function ChkArmStrong(n1) {
    var temp = n1;
    while (temp > 0) {
        reminder = temp % 10;
        total = reminder * reminder * reminder;
        temp = (temp / 10);
    }
    if (total == n1) {
        console.log("is an Armstrong number" + n1);
    }
    else {
        console.log("".concat(n1, " is not an Armstrong number."));
    }
}
ChkArmStrong(153);
