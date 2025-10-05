import { Component, Input } from '@angular/core';
import { MenuItem } from '../menu/menu.component';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrl: './item-menu.component.scss'
})
export class ItemMenuComponent {
  @Input()
  menu!: MenuItem

  @Input()
  children: boolean = false
}
