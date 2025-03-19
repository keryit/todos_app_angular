import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-item-task',
  templateUrl: './item-task.component.html',
  styleUrl: './item-task.component.css',
  imports: [CardComponent, DatePipe]
})
export class ItemTaskComponent {
  @Input({required: true}) task!: Task;
  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }

}
