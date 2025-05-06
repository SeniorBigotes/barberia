import { Injectable } from '@angular/core';
import { IService } from '@shared/types/iservice';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  // Lista de servicios
  private services: IService[] = [
    {
      image: 'img/service',
      name: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est magni molestiae consequatur, atque tenetur deleniti aspernatur!',
      price: 250,
    },
    {
      image: 'img/service',
      name: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est magni molestiae consequatur, atque tenetur deleniti aspernatur!',
      price: 250,
    },
    {
      image: 'img/service',
      name: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est magni molestiae consequatur, atque tenetur deleniti aspernatur!',
      price: 250,
    },
    {
      image: 'img/service',
      name: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est magni molestiae consequatur, atque tenetur deleniti aspernatur!',
      price: 250,
    },
    {
      image: 'img/service',
      name: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est magni molestiae consequatur, atque tenetur deleniti aspernatur!',
      price: 250,
    },
    {
      image: 'img/service',
      name: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est magni molestiae consequatur, atque tenetur deleniti aspernatur!',
      price: 250,
    }
  ];

  // Obtener la lista de servicios
  public getServices(): IService[] {
    return this.services;
  }
}
