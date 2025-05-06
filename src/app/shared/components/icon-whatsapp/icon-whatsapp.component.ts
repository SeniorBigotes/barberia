import { Component } from '@angular/core';
import { environment } from '@env/environment.development';

@Component({
  selector: 'app-icon-whatsapp',
  imports: [],
  templateUrl: './icon-whatsapp.component.html',
  styleUrl: './icon-whatsapp.component.scss'
})
export class IconWhatsappComponent {

  // BOTÓN GENERAR CITA
  public onClick(): void {
    const url: string = `https://wa.me/${environment.phone}`;
    window.open(url);
  }
}
