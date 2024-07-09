import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  constructor() {}

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilling',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 1000,
    },
  ];

  public addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character,
    };
    this.characters.push(newCharacter);
  }

  public onDelteCharacter(index: string): void {
    // this.characters.splice(index, 1);
    if (!index) return;
    this.characters = this.characters.filter(
      (character) => character.id !== index
    );
  }
}
