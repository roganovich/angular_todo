import { Injectable } from '@angular/core';
import {Category} from '../model/Category';
import {Task} from '../model/Task';
import {TestData} from '../data/TestData';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);

  constructor() {
    //this.fillTasks();
  }

  /*getCategories():Category[]{
    return TestData.categories;
  }*/
/*  fillCategories(){
    const categories = TestData.categories;
    this.categoriesSubject.next(categories);
    console.log(categories);
  }*/

  /*getTasks():Task[]{
    return TestData.tasks;
  }*/
  /*fillTasks(){
    const tasks = TestData.tasks;
    this.tasksSubject.next(tasks);
    //console.log(tasks);
  }*/

  /*getTasksByCategory(category: Category):Task[]{
    const tasks = TestData.tasks.filter(task => task.category === category);
    console.log(tasks);
    return tasks;
  }*/
  fillTasksByCategory(category: Category){
    const tasks = TestData.tasks.filter(task => task.category === category);
    this.tasksSubject.next(tasks);
  }
}
