import { Component, OnInit } from '@angular/core';
import { ServicesService } from '@core/services/services.service';
import { environment } from '@env/environment.development';
import { IService } from '@shared/types/iservice';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {

  protected services: IService[] = [];

  constructor(
    private servicesService: ServicesService
  ) {}

  ngOnInit(): void {
    this.services = this.servicesService.getServices();
  }

  // BOTÓN GENERAR CITA
  public onClick(): void {
    const url: string = `https://wa.me/${environment.phone}`;
    window.open(url);
  }
}
