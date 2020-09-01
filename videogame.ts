import { Person } from "./person"
import { Platform } from "./platform"

export class Videogame
{
    private title:string
    private releaseYear:number
    private developers:Person[]
    private nationality:string
    private director:Person
    private languages:string[]
    private platforms:Platform[]
    private price:number
    private score:number
    constructor (title:string, releaseYear:number, developers:Person[], nationality:string, director:Person, languages:string[], platforms:Platform[], price:number, score:number)
    {
        this.title = title
        this.releaseYear = releaseYear
        this.developers = developers
        this.nationality = nationality
        this.director = director
        this.languages = languages
        this.platforms = platforms
        this.price = price
        this.score = score
        if(this.score<0 || this.score>10)
        {
            console.log("Puntuación no válida");
            
        }
    }
    public getTitle():string
    {
       return this.title
    } 
    public setTitle(newTitle:string)
    {
    this.title = newTitle;
    }
    public getReleaseYear():number
    {
       return this.releaseYear
    } 
    public setReleaseYear(newReleaseYear:number)
    {
    this.releaseYear = newReleaseYear;
    }
    public getDevelopers():Person[]
    {
       return this.developers
    } 
    public setDevelopers(newDevelopers:Person[])
    {
    this.developers = newDevelopers;
    }
    public getNationality():string
    {
       return this.nationality
    } 
    public setNationality(newNationality:string)
    {
    this.nationality = newNationality;
    }
    public getDirector():Person
    {
       return this.director
    } 
    public setDirector(newDirector:Person)
    {
    this.director = newDirector;
    }
    public getLanguages():string[]
    {
       return this.languages
    } 
    public setLanguages(newLanguages:string[])
    {
    this.languages = newLanguages;
    }
    public getPlatforms():Platform[]
    {
       return this.platforms
    } 
    public setPlatforms(newPlatforms:Platform[])
    {
    this.platforms = newPlatforms;
    }
    public getPrice():number
    {
       return this.price
    } 
    public setPrice(newPrice:number)
    {
    this.price = newPrice;
    }
    public getScore():number
    {
       return this.score
    } 
    public setScore(newScore:number)
    {
    this.score = newScore;
    }

    public specificPlatform(plataforma:Platform):string
    {
        for(let i=0; i<this.platforms.length;i++)
        {
            if(this.platforms[i].getName() == plataforma.getName())
            {
                return ("Existe en la plataforma " + plataforma.getName())
            }
        }
    }

    public specificDeveloper(desarrollador:Person):string
    {
        for(let i=0; i<this.developers.length;i++)
        {
            if(this.developers[i].getName() == desarrollador.getName())
            {
                return ("Ha sido desarrollado por " + desarrollador.getName())
            }
        }
    }

    public specificLanguage(idioma:string):string
    {
        for(let i=0; i<this.languages.length;i++)
        {
            if(this.languages[i] == idioma)
            {
                return ("Está en idioma " + idioma)
            }
        }
    }

    public mostrarConsola()
    {
        let developers:string = "";
        for (let i = 0; i < this.developers.length; i++)
        {
            developers += this.developers[i].getName() + ", "
        };
        let languages:string = "";
        for (let i = 0; i < this.languages.length; i++)
        {
            languages += this.languages[i] + ", "
        };
        let platforms:string = "";
        for (let i = 0; i < this.platforms.length; i++)
        {
            platforms += this.platforms[i].getName() + ", "
        };
        let datos:string = ("Title: " + this.title + "\n" + "Release year: " + this.releaseYear + "\n" + "Developers: " + developers + "\n" + "Nationality: " + this.nationality + "\n" +
        "Director: " + this.director.mostrarConsola() + "\n" + "Languages: " + languages + "\n" + "Platforms: " + platforms + "\n" + "Price: " + this.price + "\n" + "Score: " + this.score);
        console.log(datos);
    }

    public mostrarValor():string
    {
        let developers:string = "";
        for (let i = 0; i < this.developers.length; i++)
        {
            developers += this.developers[i].getName() + ", "
        };
        let languages:string = "";
        for (let i = 0; i < this.languages.length; i++)
        {
            languages += this.languages[i] + ", "
        };
        let platforms:string = "";
        for (let i = 0; i < this.platforms.length; i++)
        {
            platforms += this.platforms[i].getName() + ", "
        };
        let datos:string = ("Title: " + this.title + "\n" + "Release year: " + this.releaseYear + "\n" + "Developers: " + developers + "\n" + "Nationality: " + this.nationality + "\n" +
        "Director: " + this.director.mostrarConsola() + "\n" + "Languages: " + languages + "\n" + "Platforms: " + platforms + "\n" + "Price: " + this.price + "\n" + "Score: " + this.score);
    return datos
    }
}