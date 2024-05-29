import {NgModule} from "@angular/core";
import {CardComponent} from "./card/card.component";

@NgModule({
  //Declare what we are needing in the module
  declarations: [CardComponent],
  //Make these components available when other places use our custom module.
  exports: [CardComponent]
})
export class SharedModule {}
