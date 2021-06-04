import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/categoryModel';
import { Movie } from 'src/app/models/models';
import { GetDataService } from 'src/app/services/getDataService/get-data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor(private service: GetDataService) {}
  categories: Category[] = [];

  ngOnInit(): void {
    this.service.categories$.subscribe((data: Category[]) => {
      this.categories = data;
    });
    this.service.getCategory();
  }
}
