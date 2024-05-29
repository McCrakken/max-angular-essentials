import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {TaskComponent} from "./task/task.component";
import {TasksComponent} from "./tasks.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [TaskComponent, TasksComponent, NewTaskComponent],
  //Becuase tasks is the only component getting used by another component outside this module, that's what we make avail
  exports: [TasksComponent],
  //Every module must work on its own, even though app.module has Browser and Shared, they aren't available here.
  //BrowserModule is intended for the root module, and not lower ones on the tree.
  imports: [CommonModule, FormsModule, SharedModule]
})
export class TasksModule {}
