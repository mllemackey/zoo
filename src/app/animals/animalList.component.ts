import { Component } from '@angular/core';
import { Animal } from './animal';
import {Sector} from './sector';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
    selector: 'app-animals',
    templateUrl: './animalList.component.html'
})
export class AnimalListComponent {
    public animals: any[];
    public sectors: any[];
    public newAnimal: Animal = new Animal('', '', '', new Sector('', ''));

    constructor(){

        this.sectors = [
            new Sector('vodeneZivotinje', '10'),
            new Sector('sisari', '20'),
            new Sector('gmizavci', '15')
        ];

        this.animals = [
            new Animal('guster', 'Dzeki', '', this.sectors[2]),
            new Animal('konj', 'Milo', '11.03.2001.', this.sectors[1]),
            new Animal('riba', 'Suna', '25.11.2010.', this.sectors[1])
        ];

    }

    remove(animal) {

        const index = this.animals.indexOf(animal);
        this.animals.splice(index,1);

    }

    moveToTop(animal) {

        const index = this.animals.indexOf(animal);
        this.animals.splice(index,1);
        this.animals.unshift(animal);

    }

    addAnimal(vrsta, ime, datumRodjenja) {

        this.newAnimal.vrsta = vrsta;
        this.newAnimal.ime = ime;
        this.newAnimal.datumRodjenja = datumRodjenja;
        this.animals.push(this.newAnimal);
    }

    listaZivotinja(sektor) {
        const sectorAnimals: any[] = [];
        const animal = '';
        for (let animal of this.animals) {
            if (animal.sektor.ime == sektor.ime) {
                sectorAnimals.push(animal.ime);
            }
        }
        alert(sectorAnimals);
    }
}
