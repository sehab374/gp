import { FakeComponent } from './fake/fake.component';
import { RealComponent } from './real/real.component';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';
import { TrustedComponent } from './trusted/trusted.component';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './input/input.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'aboutus', component: AboutusComponent },
  {path: 'input', component: InputComponent  },
  {path: '', component: HomeComponent   },
  {path: 'home', component: HomeComponent   },
  {path: 'trusted', component: TrustedComponent},
  {path: 'search', component: SearchComponent},
  {path: 'real', component: RealComponent},
  {path: 'fake', component: FakeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
