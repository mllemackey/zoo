import { Component } from '@angular/core';
import { Animal } from './animal';

@Component({
    selector: 'app-animals',
    templateUrl: './animalList.component.html'
})
export class AnimalListComponent {
    public animals: any[];
    public newAnimal: Animal = new Animal('', '', '');

    constructor(){

        this.animals = [
            new Animal('pas', 'Dzeki', ''),
            new Animal('konj', 'Milo', '11.03.2001.'),
            new Animal('riba', 'Suna', '25.11.2010.')
        ];

    }

    remove(animal){

        const index = this.animals.indexOf(animal);
        this.animals.splice(index,1);

    }

    moveToTop(animal){

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
}