import { Platform } from "./platform"
enum Device {cartucho="Cartucho", tarjeta="Tarjeta", cd="Cd", dvd="Dvd", bluray="Bluray"};

let plat1:Platform = new Platform ("Nirichugui", 2015, "Chum-chum", 1300, "cool", false, 4, true, Device.tarjeta, "black");
let plat2:Platform = new Platform ("Nirichugui", 2015, "Chum-chum", 1300, "cool", false, 4, true, Device.tarjeta, "black");
let plat3:Platform = new Platform ("Sarandonguix", 2000, "Siao-Li", 3500, "fresh", true, 60, false, Device.cartucho, "white");

console.log(plat1.coincide(plat2));
plat3.mostrarConsola();
console.log(plat3.mostrarValor());