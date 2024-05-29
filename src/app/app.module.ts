import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {BrowserModule} from "@angular/platform-browser";
import {SharedModule} from "./shared/shared.module";
import {TasksModule} from "./tasks/tasks.module";

@NgModule({
  //These are the module components we are adding to our application
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
  ],
  bootstrap: [AppComponent],
  //These imports are where we'd declare our standalone components for a module based app.
  imports: [BrowserModule, SharedModule, TasksModule],
})
export class AppModule {

}
