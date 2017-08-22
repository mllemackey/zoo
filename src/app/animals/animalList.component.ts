import { Component } from '@angular/core';

@Component({
    selector: 'app-animals',
    templateUrl: './animalList.component.html'
})
export class AnimalListComponent {

    private animals: any[];

    constructor(){
        this.animals = [
            {
                vrsta:  'pas',
                ime:    'Dzeki',
                datumRodjenja:  ''
            },
            {
                vrsta:  'konj',
                ime:    'Milo',
                datumRodjenja:  '11.03.2001.'
            },
            {
                vrsta:  'riba',
                ime:    'Suna',
                datumRodjenja:  '25.11.2010.'
            },
            {
                vrsta:  'majmun',
                ime:    'Zvrle',
                datumRodjenja:  ''
            },
            {
                vrsta:  'kornjaca',
                ime:    'Mardz',
                datumRodjenja:  '19.02.2006.'
            }
        ];
    }

    remove(animal){

        const index = this.animals.indexOf(animal);
        this.animals.splice(index,1);

    }
}
