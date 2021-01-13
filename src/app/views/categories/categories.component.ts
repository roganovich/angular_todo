import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/Category';
import {DataHandlerService} from '../../service/data-handler.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit(): void {
    //this.categories = this.dataHandler.getCategories();
    this.dataHandler.categoriesSubject.subscribe(categories => this.categories = categories);
    //console.log(this.categories);
  }

  showTasksByCategory(category: Category) {
      //console.log(category)
      this.dataHandler.fillTasksByCategory(category);
  }

}
