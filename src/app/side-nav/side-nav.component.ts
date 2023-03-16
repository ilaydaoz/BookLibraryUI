import { Component } from '@angular/core';
import { SideNavItem } from '../models/models';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  sideNavContent: SideNavItem[] = [                         
    {
      title: 'Kıtapları Goruntule',
      link: 'books/libarary',
    },
    {
      title: 'Kategoriler',
      link: 'books/maintenance',
    },
    {
      title: 'Kategorileri Yönetin',
      link: 'books/categories',
    },
    {
      title: 'Kitaplığa dön',
      link: 'books/return',
    },
    {
      title: 'Kullanıcıları Görüntüle',
      link: 'users/list',
    },
    {
      title: 'Tüm siparişler',
      link: 'users/all-orders',
    },
    {
      title: 'Siparişlerim',
      link: 'users/order',
    },
  ];
}
