import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllusersComponent } from './components/allusers/allusers.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TextComponent } from './components/text/text.component';

@NgModule({
  declarations: [
    AllusersComponent,
    TextComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    FontAwesomeModule
  ],
  exports:[
    AllusersComponent,
    TextComponent
  ]

})
export class UsersModule { }
