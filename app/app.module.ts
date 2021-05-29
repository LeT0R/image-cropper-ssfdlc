import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from './image-cropper/image-cropper.module';
import { AppComponent } from './app.component';
import { FileDragNDropDirective } from './file-drag-ndrop-directive.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, ImageCropperModule],
  declarations: [AppComponent, FileDragNDropDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
