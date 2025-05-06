import { Component } from '@angular/core';
import { HomeComponent } from '@feature/home/home.component';
import { ServicesComponent } from '@feature/services/services.component';
import { LocationComponent } from "../../location/location.component";
import { AboutComponent } from "../../about/about.component";
import { IconWhatsappComponent } from "../../../shared/components/icon-whatsapp/icon-whatsapp.component";

@Component({
  selector: 'app-content',
  imports: [
    HomeComponent,
    ServicesComponent,
    LocationComponent,
    AboutComponent,
    IconWhatsappComponent
],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
