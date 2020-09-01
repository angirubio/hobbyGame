"use strict";
exports.__esModule = true;
var platform_1 = require("./platform");
var Device;
(function (Device) {
    Device["cartucho"] = "Cartucho";
    Device["tarjeta"] = "Tarjeta";
    Device["cd"] = "Cd";
    Device["dvd"] = "Dvd";
    Device["bluray"] = "Bluray";
})(Device || (Device = {}));
;
var plat1 = new platform_1.Platform("Nirichugui", 2015, "Chum-chum", 1300, "cool", false, 4, true, Device.tarjeta, "black");
var plat2 = new platform_1.Platform("Nirichugui", 2015, "Chum-chum", 1300, "cool", false, 4, true, Device.tarjeta, "black");
var plat3 = new platform_1.Platform("Sarandonguix", 2000, "Siao-Li", 3500, "fresh", true, 60, false, Device.cartucho, "white");
console.log(plat1.coincide(plat2));
plat3.mostrarConsola();
console.log(plat3.mostrarValor());
