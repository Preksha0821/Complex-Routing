import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  {path: 'heroes', component: HeroListComponent},
  { path: 'hero/:id',      component: HeroDetailComponent },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    CrisisListComponent,
    HeroListComponent,
    HeroDetailComponent,
    PageNotFoundComponent,

  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,{enableTracing:true}
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [],

})
export class AppRoutingModule  { }

