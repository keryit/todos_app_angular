import { Component, Input } from '@angular/core';

import { ItemTaskComponent } from "./item-task/item-task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [ItemTaskComponent, NewTaskComponent]
})
export class TaskComponent {
  @Input() userId!: string;
  @Input() name!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onClickAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
