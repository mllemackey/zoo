import { Component } from '@angular/core';
import { Animal } from './animal';

@Component({
    selector: 'app-animals',
    templateUrl: './animalList.component.html'
})
export class AnimalListComponent {
    public animals: any[];

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
}