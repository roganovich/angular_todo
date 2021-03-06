import { Component, OnInit } from '@angular/core';
import {Task} from '../../model/Task';
import {DataHandlerService} from '../../service/data-handler.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks:Task[];

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    //this.tasks = this.dataHandler.getTasks();
    this.dataHandler.tasksSubject.subscribe(tasks => this.tasks = tasks);
  }

}
