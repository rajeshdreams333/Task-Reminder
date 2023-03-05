import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import {faTimesCircle} from '@fortawesome/free-regular-svg-icons'
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
      @Input() task!: Task;
      @Output() onDeleteTask: EventEmitter<Task>=new EventEmitter();
      @Output() onToggleReminder: EventEmitter<Task>=new EventEmitter();
      faTimesCircle=faTimesCircle;
      onDelete(task :any){
      this.onDeleteTask.emit(task);
      }
      onToggle(task:any){
        this.onToggleReminder.emit(task);
      }
} 
