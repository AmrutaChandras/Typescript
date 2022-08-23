var Assign1Component = /** @class */ (function () {
    function Assign1Component(a, b) {
        this.no1 = a;
        this.no2 = b;
    }
    Assign1Component.prototype.Addition = function () {
        var Ans = 0;
        Ans = this.no1 + this.no2;
        return Ans;
    };
    Assign1Component.prototype.Subtraction = function () {
        var Ans = 0;
        Ans = this.no1 - this.no2;
        return Ans;
    };
    Assign1Component.prototype.multiplication = function () {
        var Ans = 0;
        Ans = this.no1 * this.no2;
        return Ans;
    };
    Assign1Component.prototype.Divide = function () {
        var Ans = 0;
        Ans = this.no1 / this.no2;
        return Ans;
    };
    return Assign1Component;
}());
var obj2 = new Assign1Component(20, 2);
var Rettemp = 0;
Rettemp = obj2.Addition();
var Sub = obj2.Subtraction();
var mul = obj2.multiplication();
var div = obj2.Divide();
console.log("Addition is" + Rettemp);
console.log("Addition is" + Sub);
console.log("Addition is" + mul);
console.log("Addition is" + div);
