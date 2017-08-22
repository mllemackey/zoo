import {Sector} from './sector';

export class Animal{

    public vrsta: string;
    public ime: string;
    public datumRodjenja: string;
    public sektor: Sector;

    constructor(vrsta: string, ime: string, datumRodjenja: string, sektor: Sector){
        this.vrsta = vrsta;
        this.ime = ime;
        this.datumRodjenja = datumRodjenja;
        this.sektor = sektor;
    }

}