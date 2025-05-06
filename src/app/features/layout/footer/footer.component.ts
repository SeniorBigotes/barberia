import { Component } from '@angular/core';
import { environment } from '@env/environment.development';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected phone: string = environment.phone;
  protected email: string = environment.email;

  protected year: number = new Date().getFullYear();
}
