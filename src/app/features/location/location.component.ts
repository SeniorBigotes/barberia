import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { environment } from '@env/environment.development';

@Component({
  selector: 'app-location',
  imports: [],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent implements OnInit, OnDestroy {

  private map: any;
  private L: any;

  constructor(
    @Inject(PLATFORM_ID) private plataformId: Object
  ) {}

  async ngOnInit(): Promise<void> {
    await this.locationMap();
  }

  ngOnDestroy(): void {
    if(this.map) {
      this.map.remove();
      this.map = null;
    }
  }

  // RENDERIZADO DEL MAPA
  private async locationMap(): Promise<void> {
    if(isPlatformBrowser(this.plataformId)) {
      const coordinateX: number = environment.coordinateX;
      const coordinateY: number = environment.coordinateY;

      this.L = await import('leaflet');
      this.map = this.L.map('map').setView([coordinateX, coordinateY], 16);

      this.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
      }).addTo(this.map);

      this.L.marker([coordinateX, coordinateY])
      .addTo(this.map)
      .bindPopup('Nos ubicamos en este punto')
      .openPopup();
    }
  }
}