import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-new-task',
  //Here we're importing a module into a standalone component. We can mix the two versions of components
  //This can be helpful when we migrate from module to standalone components.
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();    //Void type means there is going to be no data

  //Hook into our TaskService so we can use the functionality there provides our dependency injection
  private tasksService = inject(TasksService);
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);

    this.close.emit();
  }

  onCancel() {
    this.close.emit();
  }

}
