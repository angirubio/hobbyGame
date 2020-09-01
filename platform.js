"use strict";
exports.__esModule = true;
exports.Platform = void 0;
var Device;
(function (Device) {
    Device["cartucho"] = "Cartucho";
    Device["tarjeta"] = "Tarjeta";
    Device["cd"] = "Cd";
    Device["dvd"] = "Dvd";
    Device["bluray"] = "Bluray";
})(Device || (Device = {}));
;
var Platform = /** @class */ (function () {
    function Platform(name, releaseYear, company, nBits, generation, hasHD, hdSize, hasInternetConnection, storageDevice, color) {
        this.name = name;
        this.releaseYear = releaseYear;
        this.company = company;
        this.nBits = nBits;
        this.generation = generation;
        this.hasHD = hasHD;
        this.hdSize = hdSize;
        this.hasInternetConnection = hasInternetConnection;
        this.storageDevice = storageDevice;
        this.color = color;
    }
    Platform.prototype.getName = function () {
        return this.name;
    };
    Platform.prototype.setName = function (newName) {
        this.name = newName;
    };
    Platform.prototype.getReleaseYear = function () {
        return this.releaseYear;
    };
    Platform.prototype.setReleaseYear = function (newReleaseYear) {
        this.releaseYear = newReleaseYear;
    };
    Platform.prototype.getCompany = function () {
        return this.company;
    };
    Platform.prototype.setCompany = function (newCompany) {
        this.company = newCompany;
    };
    Platform.prototype.getnBits = function () {
        return this.nBits;
    };
    Platform.prototype.setnBits = function (newnBits) {
        this.nBits = newnBits;
    };
    Platform.prototype.getGeneration = function () {
        return this.generation;
    };
    Platform.prototype.setGeneration = function (newGeneration) {
        this.generation = newGeneration;
    };
    Platform.prototype.gethasHD = function () {
        return this.hasHD;
    };
    Platform.prototype.sethasHD = function (newhasHD) {
        this.hasHD = newhasHD;
    };
    Platform.prototype.gethdSize = function () {
        return this.hdSize;
    };
    Platform.prototype.sethdSize = function (newhdSize) {
        this.hdSize = newhdSize;
    };
    Platform.prototype.gethasInternetConnection = function () {
        return this.hasInternetConnection;
    };
    Platform.prototype.sethasInternetConnection = function (newhasInternetConnection) {
        this.hasInternetConnection = newhasInternetConnection;
    };
    Platform.prototype.getStorageDevice = function () {
        return this.storageDevice;
    };
    Platform.prototype.setStorageDevice = function (newStorageDevice) {
        this.storageDevice = newStorageDevice;
    };
    Platform.prototype.getColor = function () {
        return this.color;
    };
    Platform.prototype.setColor = function (newColor) {
        this.color = newColor;
    };
    Platform.prototype.coincide = function (plataforma) {
        if ((plataforma.name == this.name) && (plataforma.releaseYear == this.releaseYear) && (plataforma.company == this.company) &&
            (plataforma.nBits == this.nBits) && (plataforma.generation == this.generation) && (plataforma.hasHD == this.hasHD) && (plataforma.hdSize == this.hdSize)
            && (plataforma.hasInternetConnection == this.hasInternetConnection) && (plataforma.storageDevice == this.storageDevice) && (plataforma.color == this.color)) {
            return true;
        }
        else {
            return false;
        }
    };
    Platform.prototype.mostrarConsola = function () {
        var datos = ("Name: " + this.name + "\n" + "Release year: " + this.releaseYear + "\n" + "Company: " + this.company + "\n" + "Bits: " + this.nBits + "\n" +
            "Generation: " + this.generation + "\n" + "Has HD?: " + this.hasHD + "\n" + "HD Size: " + this.hdSize + "\n" + "Has Internet Connection?: " + this.hasInternetConnection + "\n" +
            "Storage Device: " + this.storageDevice + "\n" + "Color: " + this.color);
        console.log(datos);
    };
    Platform.prototype.mostrarValor = function () {
        var datos = ("Name: " + this.name + "\n" + "Release year: " + this.releaseYear + "\n" + "Company: " + this.company + "\n" + "Bits: " + this.nBits + "\n" +
            "Generation: " + this.generation + "\n" + "Has HD?: " + this.hasHD + "\n" + "HD Size: " + this.hdSize + "\n" + "Has Internet Connection?: " + this.hasInternetConnection + "\n" +
            "Storage Device: " + this.storageDevice + "\n" + "Color: " + this.color);
        return (datos);
    };
    return Platform;
}());
exports.Platform = Platform;
