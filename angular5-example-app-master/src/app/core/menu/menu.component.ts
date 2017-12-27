import { Component, OnInit } from '@angular/core';
import {Menu} from '../../menu-data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})



export class MenuComponent implements OnInit {

  menus = [
    new Menu( 'TRANG CHỦ','#'),
    new Menu( 'TÙY CHỈNH','#'),
  
  ];
  menus1 = [
    new Menu( 'THỜI GIAN THỰC','#',),
    new Menu( 'ĐỐI TƯỢNG','#'),
    new Menu( 'CHUYỂN ĐỔI','#'),
    new Menu( 'HÀNH VI','#'),
  ];
  menus2 = [
    new Menu( 'KHÁM PHÁ','#'),
    new Menu( 'QUẢN TRỊ','#'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
