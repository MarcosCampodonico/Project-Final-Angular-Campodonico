import { Component, OnDestroy, OnInit } from '@angular/core';
import { course } from './models';
import { CursosService } from './cursos.service';
import { Observable, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectIsAdmin } from 'src/app/store/auth/auth.selectors';

@Component({
  selector: 'app-products',
  templateUrl: './cursos.component.html',
  styles: [
  ]
})
export class CursosComponent implements OnInit, OnDestroy {
  
  public data$: Observable<course[]>;

  public displayedColumns = ['id', 'name', 'price', 'actions'];

  public isAdmin$: Observable<boolean>;

  constructor(private cursosService: CursosService, private store: Store) {
    this.data$ = this.cursosService.getProducts();
    this.isAdmin$ = this.store.select(selectIsAdmin);
  }

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    // CARGO LOS PRODUCTOS
    this.cursosService.loadProducts();
    // // LUEGO LOS OBTENGO
    // this.productService.getProducts().subscribe({
    //   next: (data) => console.log('data: ', data),
    // });
  }

  onCreate(): void {
    this.cursosService.create();
  }

  onDelete(id: number): void {
    this.cursosService.deleteById(id);
  }
}
