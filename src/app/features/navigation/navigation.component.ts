import { Component } from '@angular/core';
import { secureHeapUsed } from 'node:crypto';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  protected onClick(section: string): void {
    const element: HTMLElement | null = document.getElementById(section);

    if(element) {
      let offset: number = 105;
      if(window.innerWidth >= 721) offset = 150;
      if(window.innerWidth >= 1281) offset = 130;
      const scrollY: number = window.scrollY;
      const top: number = element.getBoundingClientRect().top + scrollY - offset;

      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    }
  }
}
