import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropperComponent } from './component/image-cropper.component';
import { CropperDialogComponent } from './cropper-dialog/cropper-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ImageCropperComponent, CropperDialogComponent],
  exports: [ImageCropperComponent, CropperDialogComponent]
})
export class ImageCropperModule {}
