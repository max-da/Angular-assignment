import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from 'src/app/models/models';
import { GetDataService } from 'src/app/services/getDataService/get-data.service';
import { ShoppingcartService } from 'src/app/services/shoppingcartService/shoppingcart.service';

@Component({
  selector: 'app-specific-product',
  templateUrl: './specific-product.component.html',
  styleUrls: ['./specific-product.component.scss'],
})
export class SpecificProductComponent implements OnInit {
  constructor(
    private service: GetDataService,
    private shoppingcartService: ShoppingcartService,
    private route: ActivatedRoute
  ) {}
  movie: Movie;
  id: number = 0;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id'));

      this.movie = this.service.getMovieId(this.id);
    });
  }
  addToShoppingcart(): void {
    this.movie.amount = 1;
    this.movie.totalPerMovie = this.movie.price;
    this.shoppingcartService.pushToCart(this.movie);

    this.service.getLs();
  }
}
