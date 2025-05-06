import { Routes } from '@angular/router';
import { ContentComponent } from '@feature/layout/content/content.component';

export const routes: Routes = [
  { path: '', redirectTo: 'barberia', pathMatch: 'full' },
  { path: 'barberia', component: ContentComponent, title: 'El Barbitas' }
];
