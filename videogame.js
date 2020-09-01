"use strict";
exports.__esModule = true;
exports.Videogame = void 0;
var Videogame = /** @class */ (function () {
    function Videogame(title, releaseYear, developers, nationality, director, languages, platforms, price, score) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.developers = developers;
        this.nationality = nationality;
        this.director = director;
        this.languages = languages;
        this.platforms = platforms;
        this.price = price;
        this.score = score;
        if (this.score < 0 || this.score > 10) {
            console.log("Puntuación no válida");
        }
    }
    Videogame.prototype.getTitle = function () {
        return this.title;
    };
    Videogame.prototype.setTitle = function (newTitle) {
        this.title = newTitle;
    };
    Videogame.prototype.getReleaseYear = function () {
        return this.releaseYear;
    };
    Videogame.prototype.setReleaseYear = function (newReleaseYear) {
        this.releaseYear = newReleaseYear;
    };
    Videogame.prototype.getDevelopers = function () {
        return this.developers;
    };
    Videogame.prototype.setDevelopers = function (newDevelopers) {
        this.developers = newDevelopers;
    };
    Videogame.prototype.getNationality = function () {
        return this.nationality;
    };
    Videogame.prototype.setNationality = function (newNationality) {
        this.nationality = newNationality;
    };
    Videogame.prototype.getDirector = function () {
        return this.director;
    };
    Videogame.prototype.setDirector = function (newDirector) {
        this.director = newDirector;
    };
    Videogame.prototype.getLanguages = function () {
        return this.languages;
    };
    Videogame.prototype.setLanguages = function (newLanguages) {
        this.languages = newLanguages;
    };
    Videogame.prototype.getPlatforms = function () {
        return this.platforms;
    };
    Videogame.prototype.setPlatforms = function (newPlatforms) {
        this.platforms = newPlatforms;
    };
    Videogame.prototype.getPrice = function () {
        return this.price;
    };
    Videogame.prototype.setPrice = function (newPrice) {
        this.price = newPrice;
    };
    Videogame.prototype.getScore = function () {
        return this.score;
    };
    Videogame.prototype.setScore = function (newScore) {
        this.score = newScore;
    };
    Videogame.prototype.specificPlatform = function (plataforma) {
        for (var i = 0; i < this.platforms.length; i++) {
            if (this.platforms[i].getName() == plataforma.getName()) {
                return ("Existe en la plataforma " + plataforma.getName());
            }
        }
    };
    Videogame.prototype.specificDeveloper = function (desarrollador) {
        for (var i = 0; i < this.developers.length; i++) {
            if (this.developers[i].getName() == desarrollador.getName()) {
                return ("Ha sido desarrollado por " + desarrollador.getName());
            }
        }
    };
    Videogame.prototype.specificLanguage = function (idioma) {
        for (var i = 0; i < this.languages.length; i++) {
            if (this.languages[i] == idioma) {
                return ("Está en idioma " + idioma);
            }
        }
    };
    Videogame.prototype.mostrarConsola = function () {
        var developers = "";
        for (var i = 0; i < this.developers.length; i++) {
            developers += this.developers[i].getName() + ", ";
        }
        ;
        var languages = "";
        for (var i = 0; i < this.languages.length; i++) {
            languages += this.languages[i] + ", ";
        }
        ;
        var platforms = "";
        for (var i = 0; i < this.platforms.length; i++) {
            platforms += this.platforms[i].getName() + ", ";
        }
        ;
        var datos = ("Title: " + this.title + "\n" + "Release year: " + this.releaseYear + "\n" + "Developers: " + developers + "\n" + "Nationality: " + this.nationality + "\n" +
            "Director: " + this.director.mostrarConsola() + "\n" + "Languages: " + languages + "\n" + "Platforms: " + platforms + "\n" + "Price: " + this.price + "\n" + "Score: " + this.score);
        console.log(datos);
    };
    Videogame.prototype.mostrarValor = function () {
        var developers = "";
        for (var i = 0; i < this.developers.length; i++) {
            developers += this.developers[i].getName() + ", ";
        }
        ;
        var languages = "";
        for (var i = 0; i < this.languages.length; i++) {
            languages += this.languages[i] + ", ";
        }
        ;
        var platforms = "";
        for (var i = 0; i < this.platforms.length; i++) {
            platforms += this.platforms[i].getName() + ", ";
        }
        ;
        var datos = ("Title: " + this.title + "\n" + "Release year: " + this.releaseYear + "\n" + "Developers: " + developers + "\n" + "Nationality: " + this.nationality + "\n" +
            "Director: " + this.director.mostrarConsola() + "\n" + "Languages: " + languages + "\n" + "Platforms: " + platforms + "\n" + "Price: " + this.price + "\n" + "Score: " + this.score);
        return datos;
    };
    return Videogame;
}());
exports.Videogame = Videogame;
