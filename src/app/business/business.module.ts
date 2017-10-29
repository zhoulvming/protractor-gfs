import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { BusinessRoutingModule } from './business.routing.module';
import { SampleListComponent } from './sample/sample-list.component';

@NgModule({
  declarations: [ HomeComponent, SampleListComponent ],
  imports: [ CommonModule, BusinessRoutingModule ],
  exports: [],
  providers: [],
})
export class BusinessModule {}
