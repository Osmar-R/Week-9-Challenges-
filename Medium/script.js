
var pii = (function () {

    function pii(name, ssn) {
        this.getName = function () {
            return name;
        };
    }
    return pii;

}());

var p = new pii('Osmar', 999999)


console.log(p)