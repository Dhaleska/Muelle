import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  category: string;
  price: number;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  // Lista de items del menú
  menuItems: MenuItem[] = [
    { name: 'Ensalada', category: 'entradas', price: 10 },
    { name: 'Sopa', category: 'entradas', price: 8 },
    { name: 'Bistec', category: 'platos-principales', price: 20 },
    { name: 'Pasta', category: 'platos-principales', price: 15 },
    { name: 'Helado', category: 'postres', price: 6 },
    { name: 'Pastel', category: 'postres', price: 7 },
    { name: 'Coca Cola', category: 'bebidas', price: 4 },
    { name: 'Jugo de Naranja', category: 'bebidas', price: 5 }
  ];

  // Items filtrados basados en la categoría seleccionada
  filteredMenuItems: MenuItem[] = [];

  // Lista de items seleccionados en la comanda
  order: MenuItem[] = [];

  constructor() {
    this.selectCategory('entradas');
  }

  // Filtra los items del menú basados en la categoría seleccionada
  selectCategory(category: string) {
    this.filteredMenuItems = this.menuItems.filter(item => item.category === category);
  }

  // Agrega un item a la comanda
  addToOrder(item: MenuItem) {
    this.order.push(item);
  }

  // Calcula el total de la comanda
  getTotal() {
    return this.order.reduce((total, item) => total + item.price, 0);
  }
}
