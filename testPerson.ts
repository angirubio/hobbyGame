import { Person } from "./person"
enum Profession {developer="Developer", tester="Tester", manager="Manager", director="Director"};

let mario:Person = new Person ("Mario", "Italiano", Profession.tester, 36);
let luigi:Person = new Person ("Luigi", "Italiano", Profession.manager, 36);
let wario:Person = new Person ("Mario", "Italiano", Profession.developer, 36);


console.log(mario.getExperienceYears());
console.log(mario.coincide(luigi));
console.log(mario.coincide(wario));
luigi.mostrarConsola();
console.log(wario.mostrarValor());