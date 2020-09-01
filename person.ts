enum Profession {developer="Developer", tester="Tester", manager="Manager", director="Director"};

export class Person
{
    private name:string
    private nationality:string
    private profession:Profession
    private experienceYears:number

    constructor(name:string, nationality:string, profession:Profession, experienceYears:number)
    {
        this.name = name
        this.nationality = nationality
        this.profession = profession
        this.experienceYears = experienceYears
    }

    public getName():string
    {
       return this.name
    } 
    public setName(newName:string)
    {
    this.name = newName;
    }
    public getNationality():string
    {
       return this.nationality
    } 
    public setNationality(newNationality:string)
    {
    this.nationality = newNationality;
    }
    public getProfession():Profession
    {
       return this.profession
    } 
    public setProfession(newProfession:Profession)
    {
    this.profession = newProfession;
    }
    public getExperienceYears():number
    {
       return this.experienceYears
    } 
    public setExperienceYears(newExperienceYears:number)
    {
    this.experienceYears = newExperienceYears;
    }

    public coincide(persona):boolean
    {
        if((persona.name == this.name) && (persona.nationality == this.nationality) && (persona.profession == this.profession) && (persona.experienceYears == this.experienceYears))
        {
            return true
        } else {
            return false
        }

    }

    public mostrarConsola()
    {
        let datos:string = ("Name: " + this.name + "\n" + "Nationality: " + this.nationality + "\n" + "Profession: " + this.profession + "\n" + "Experience years: " + this.experienceYears);
        console.log(datos);
    }
    public mostrarValor():string
    {
        let datos:string = ("Name: " + this.name + "\n" + "Nationality: " + this.nationality + "\n" + "Profession: " + this.profession + "\n" + "Experience years: " + this.experienceYears);
        return(datos);
        
    }

}