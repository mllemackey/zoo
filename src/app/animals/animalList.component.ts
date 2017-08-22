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
                datumRodjenja:  '01.01.2011.'
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
                datumRodjenja:  '12.12.2012.'
            },
            {
                vrsta:  'kornjaca',
                ime:    'Mardz',
                datumRodjenja:  '19.02.2006.'
            }
        ];
    }
}
