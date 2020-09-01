enum Device {cartucho="Cartucho", tarjeta="Tarjeta", cd="Cd", dvd="Dvd", bluray="Bluray"};

export class Platform
{
    private name:string
    private releaseYear:number
    private company:string
    private nBits:number
    private generation:string
    private hasHD:boolean
    private hdSize:number
    private hasInternetConnection:boolean
    private storageDevice:Device
    private color:string

    constructor (name:string, releaseYear:number, company:string, nBits:number, generation:string, hasHD:boolean, hdSize:number, hasInternetConnection:boolean, storageDevice:Device, color:string)
    {
        this.name = name
        this.releaseYear = releaseYear
        this.company = company
        this.nBits = nBits
        this.generation = generation
        this.hasHD = hasHD
        this.hdSize = hdSize
        this.hasInternetConnection = hasInternetConnection
        this.storageDevice = storageDevice
        this.color = color
    }
    public getName():string
    {
       return this.name
    } 
    public setName(newName:string)
    {
    this.name = newName;
    }
    public getReleaseYear():number
    {
       return this.releaseYear
    } 
    public setReleaseYear(newReleaseYear:number)
    {
    this.releaseYear = newReleaseYear;
    }
    public getCompany():string
    {
       return this.company
    } 
    public setCompany(newCompany:string)
    {
    this.company = newCompany;
    }
    public getnBits():number
    {
       return this.nBits
    } 
    public setnBits(newnBits:number)
    {
    this.nBits = newnBits;
    }
    public getGeneration():string
    {
       return this.generation
    } 
    public setGeneration(newGeneration:string)
    {
    this.generation = newGeneration;
    }
    public gethasHD():boolean
    {
       return this.hasHD
    } 
    public sethasHD(newhasHD:boolean)
    {
    this.hasHD = newhasHD;
    }
    public gethdSize():number
    {
       return this.hdSize
    } 
    public sethdSize(newhdSize:number)
    {
    this.hdSize = newhdSize;
    }
    public gethasInternetConnection():boolean
    {
       return this.hasInternetConnection
    } 
    public sethasInternetConnection(newhasInternetConnection:boolean)
    {
    this.hasInternetConnection = newhasInternetConnection;
    }
    public getStorageDevice():Device
    {
       return this.storageDevice
    } 
    public setStorageDevice(newStorageDevice:Device)
    {
    this.storageDevice = newStorageDevice;
    }
    public getColor():string
    {
       return this.color
    } 
    public setColor(newColor:string)
    {
    this.color = newColor;
    }

    public coincide(plataforma):boolean
    {
        if((plataforma.name == this.name) && (plataforma.releaseYear == this.releaseYear) && (plataforma.company == this.company) &&
        (plataforma.nBits == this.nBits) && (plataforma.generation == this.generation) && (plataforma.hasHD == this.hasHD) && (plataforma.hdSize == this.hdSize)
        && (plataforma.hasInternetConnection == this.hasInternetConnection) && (plataforma.storageDevice == this.storageDevice) && (plataforma.color == this.color))
        {
            return true
        } else {
            return false
        }

    }
    public mostrarConsola()
    {
        let datos:string = ("Name: " + this.name + "\n" + "Release year: " + this.releaseYear + "\n" + "Company: " + this.company + "\n" + "Bits: " + this.nBits + "\n" +
        "Generation: " + this.generation + "\n" + "Has HD?: " + this.hasHD + "\n" + "HD Size: " + this.hdSize + "\n" + "Has Internet Connection?: " + this.hasInternetConnection + "\n" +
        "Storage Device: " + this.storageDevice + "\n" + "Color: " + this.color);
        console.log(datos);
    }
    public mostrarValor():string
    {
        let datos:string = ("Name: " + this.name + "\n" + "Release year: " + this.releaseYear + "\n" + "Company: " + this.company + "\n" + "Bits: " + this.nBits + "\n" +
        "Generation: " + this.generation + "\n" + "Has HD?: " + this.hasHD + "\n" + "HD Size: " + this.hdSize + "\n" + "Has Internet Connection?: " + this.hasInternetConnection + "\n" +
        "Storage Device: " + this.storageDevice + "\n" + "Color: " + this.color);
        return(datos);
        
    }
}