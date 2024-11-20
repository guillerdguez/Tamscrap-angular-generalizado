import { Injectable } from '@angular/core';
import { Producto } from '../../Domain/ProductoClass';
import { Router } from '@angular/router';
import { ProductoService } from '../../../Service/Producto.service';
import { AlgoModel } from './AlgoModel';
import { ProductoDetails } from '../../Domain/ProductoDetails';
import { UserModel } from './UserModel';

@Injectable({ providedIn: 'root' })
export class ProductoModel {
  productos: Producto[] = [];
  producto: Producto | undefined | ProductoDetails;

  // // Agregamos el arreglo de campos a mostrar
  // private fieldsToShow: string[] = [
  //   'nombre',
  //   'categoria',
  //   'descripcion',
  //   'rating',
  // ];

  constructor(
    private router: Router,
    private algoModel: AlgoModel,
    public userModel: UserModel
  ) {}

  crearProductos(productos: Producto[], productoService: ProductoService) {
    let listaProducto: Producto[] = [];
    productos.forEach((producto) =>
      listaProducto.push(
        new Producto(
          this.router,
          this.algoModel,
          this,
          this.userModel,
          productoService
        ).getParametros(producto)
      )
    );
    return listaProducto;
  }

  // // Método para obtener los campos a mostrar
  // getFieldsToShow(): string[] {
  //   return this.fieldsToShow;
  // }
}
