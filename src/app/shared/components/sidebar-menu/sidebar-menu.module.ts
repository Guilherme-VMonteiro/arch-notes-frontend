import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarMenuComponent } from './sidebar-menu.component';
import { ItemMenuComponent } from './components/item-menu/item-menu.component';
import { MenuComponent } from './components/menu/menu.component';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from "../../../app-routing.module";



@NgModule({
  declarations: [
    SidebarMenuComponent,
    ItemMenuComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    AppRoutingModule
],
  exports: [
    SidebarMenuComponent
  ]
})
export class SidebarMenuModule { }
