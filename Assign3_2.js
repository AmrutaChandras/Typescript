var CircleComponent = /** @class */ (function () {
    function CircleComponent(a) {
        this.radius = a;
    }
    CircleComponent.prototype.Circlrarea = function () {
        var area;
        area = 3.14 * this.radius * this.radius;
        return area;
    };
    return CircleComponent;
}());
var obj1 = new CircleComponent(12);
var Ret;
Ret = obj1.Circlrarea();
console.log("area is: " + Ret);
