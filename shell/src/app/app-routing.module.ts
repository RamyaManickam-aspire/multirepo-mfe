import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './ProductsModule',
      })
        .then((m) => m.ProductsModule)
        .catch((err: any) => {
          console.error('Error loading remote module:', err);
        }),
  },
  {
    path: 'products-suggested',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './ProductsSuggestedModule',
      })
        .then((m) => m.ProductsSuggestedModule)
        .catch((err: any) => {
          console.error('Error loading remote module:', err);
        }),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
