import { Person } from "./person"
enum Profession {developer="Developer", tester="Tester", manager="Manager", director="Director"};
import { Platform } from "./platform"
enum Device {cartucho="Cartucho", tarjeta="Tarjeta", cd="Cd", dvd="Dvd", bluray="Bluray"};
import { Videogame } from "./videogame"

let mario:Person = new Person ("Mario", "Italiano", Profession.tester, 36);
let luigi:Person = new Person ("Luigi", "Italiano", Profession.manager, 36);
let wario:Person = new Person ("Mario", "Italiano", Profession.developer, 36);

let jugadores:Person[] = [mario, luigi, wario]
let idiomas:string[] = ["español", "inglés", "catalán", "francés"]

let plat1:Platform = new Platform ("Nirichugui", 2015, "Chum-chum", 1300, "cool", false, 4, true, Device.tarjeta, "black");
let plat2:Platform = new Platform ("Nirichugui", 2015, "Chum-chum", 1300, "cool", false, 4, true, Device.tarjeta, "black");
let plat3:Platform = new Platform ("Sarandonguix", 2000, "Siao-Li", 3500, "fresh", true, 60, false, Device.cartucho, "white");

let disponibles:Platform[] = [plat1, plat2, plat3]

let vg1:Videogame = new Videogame ("Anchoas VS Tiburones", 2020, jugadores, "Español", mario, idiomas, disponibles, 40, 9)

console.log(vg1.specificPlatform(plat1));
console.log(vg1.specificDeveloper(mario));
console.log(vg1.specificLanguage("catalán"));
vg1.mostrarConsola();
console.log(vg1.mostrarValor());