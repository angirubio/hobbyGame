"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var Profession;
(function (Profession) {
    Profession["developer"] = "Developer";
    Profession["tester"] = "Tester";
    Profession["manager"] = "Manager";
    Profession["director"] = "Director";
})(Profession || (Profession = {}));
;
var mario = new person_1.Person("Mario", "Italiano", Profession.tester, 36);
var luigi = new person_1.Person("Luigi", "Italiano", Profession.manager, 36);
var wario = new person_1.Person("Mario", "Italiano", Profession.developer, 36);
console.log(mario.getExperienceYears());
console.log(mario.coincide(luigi));
console.log(mario.coincide(wario));
luigi.mostrarConsola();
console.log(wario.mostrarValor());
