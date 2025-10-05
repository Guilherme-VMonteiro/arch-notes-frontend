import { Component, Input } from '@angular/core';

export interface MenuItem {
  id: string;
  label: string;
  link?: string;
  childrens?: MenuItem[];
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Input()
  menu: MenuItem[] = [
    {
      id: '00000000-0000-0000-0000-000000000000',
      label: 'Event-driven',
      childrens: [
        {
          id: '00000000-0000-0000-0000-000000000001',
          label: 'Eventos e filas',
          link: '/event-driven/eventos-e-filas',
        },
        {
          id: '00000000-0000-0000-0000-000000000002',
          label: 'Brokers',
          link: '/event-driven/brokers',
        },
        {
          id: '00000000-0000-0000-0000-000000000003',
          label: 'Event Sourcing',
          link: '/event-driven/event-sourcing',
        },
        {
          id: '00000000-0000-0000-0000-000000000004',
          label: 'CQRS',
          link: '/event-driven/cqrs',
        },
      ],
    }
  ];
}
