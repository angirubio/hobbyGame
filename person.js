"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Profession;
(function (Profession) {
    Profession["developer"] = "Developer";
    Profession["tester"] = "Tester";
    Profession["manager"] = "Manager";
    Profession["director"] = "Director";
})(Profession || (Profession = {}));
;
var Person = /** @class */ (function () {
    function Person(name, nationality, profession, experienceYears) {
        this.name = name;
        this.nationality = nationality;
        this.profession = profession;
        this.experienceYears = experienceYears;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (newName) {
        this.name = newName;
    };
    Person.prototype.getNationality = function () {
        return this.nationality;
    };
    Person.prototype.setNationality = function (newNationality) {
        this.nationality = newNationality;
    };
    Person.prototype.getProfession = function () {
        return this.profession;
    };
    Person.prototype.setProfession = function (newProfession) {
        this.profession = newProfession;
    };
    Person.prototype.getExperienceYears = function () {
        return this.experienceYears;
    };
    Person.prototype.setExperienceYears = function (newExperienceYears) {
        this.experienceYears = newExperienceYears;
    };
    Person.prototype.coincide = function (persona) {
        if ((persona.name == this.name) && (persona.nationality == this.nationality) && (persona.profession == this.profession) && (persona.experienceYears == this.experienceYears)) {
            return true;
        }
        else {
            return false;
        }
    };
    Person.prototype.mostrarConsola = function () {
        var datos = ("Name: " + this.name + "\n" + "Nationality: " + this.nationality + "\n" + "Profession: " + this.profession + "\n" + "Experience years: " + this.experienceYears);
        console.log(datos);
    };
    Person.prototype.mostrarValor = function () {
        var datos = ("Name: " + this.name + "\n" + "Nationality: " + this.nationality + "\n" + "Profession: " + this.profession + "\n" + "Experience years: " + this.experienceYears);
        return (datos);
    };
    return Person;
}());
exports.Person = Person;
