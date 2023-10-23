import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { ContainerComponent } from "./container/container.component";
import { LayoutComponent } from "./layout.component";

@NgModule({
  imports: [IonicModule],
  declarations: [LayoutComponent, ContainerComponent],
})
export class LayoutModule {}
