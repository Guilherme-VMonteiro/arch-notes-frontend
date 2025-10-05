import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SidebarMenuModule } from '../shared/components/sidebar-menu/sidebar-menu.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    SidebarMenuModule
  ],
  exports: [
    MainComponent
  ]
})
export class LayoutsModule { }
