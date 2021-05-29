import { Component, ViewChild } from '@angular/core';
import { ImageCroppedEvent } from './image-cropper/interfaces';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  height = 1000;
  width = 1500;
  base = 1000;

  imageEvent1: any;
  imageEvent2: any;
  imageEvent3: any;
  imageEvent4: any;

  file1: any;
  file2: any;
  file3: any;
  file4: any;

  rescale(length) {
    const images = [
      this.imageEvent1,
      this.imageEvent2,
      this.imageEvent3,
      this.imageEvent4
    ];
    const minImageEvent = images
      .filter(image => image != null)
      .reduce((cur, prev) => (cur.width < prev.width ? cur : prev));
    this.base = minImageEvent.width;
    this.width = this.base * 3;
    this.height = this.base * 2;
    this.updateImage1(this.imageEvent1);
    this.updateImage2(this.imageEvent2);
    this.updateImage3(this.imageEvent3);
    this.updateImage4(this.imageEvent4);
  }

  download() {
    console.log('download');
    var canvas = document.getElementById('mycanvas') as HTMLCanvasElement;
    var img = canvas.toDataURL('image/png');
    var a = document.createElement('a');
    a.href = img;
    a.setAttribute('download', 'composition.png');
    a.click();
  }

  updateImage1(imageEvent: ImageCroppedEvent) {
    console.log(imageEvent);
    if (imageEvent == null) {
      return;
    }
    this.imageEvent1 = imageEvent;
    this.draw(0, 0, imageEvent);
  }

  updateImage2(imageEvent: ImageCroppedEvent) {
    if (imageEvent == null) {
      return;
    }
    this.imageEvent2 = imageEvent;
    this.draw(0, this.height / 2, imageEvent);
  }

  updateImage3(imageEvent: ImageCroppedEvent) {
    if (imageEvent == null) {
      return;
    }
    this.imageEvent3 = imageEvent;
    this.draw(this.width / 2, 0, imageEvent);
  }

  updateImage4(imageEvent: ImageCroppedEvent) {
    if (imageEvent == null) {
      return;
    }
    this.imageEvent4 = imageEvent;
    this.draw(this.width / 2, this.height / 2, imageEvent);
  }

  draw(width, height, croppedImageEvent: ImageCroppedEvent) {
    var canvas = document.querySelector('canvas');
    var context = canvas.getContext('2d');
    var image = new Image(croppedImageEvent.width, croppedImageEvent.height);
    image.onload = () => {
      context.fillRect(width, height, this.width / 2, this.height / 2);
      context.drawImage(image, width, height, this.width / 2, this.height / 2);
      console.log(croppedImageEvent);
    };
    image.src = croppedImageEvent.base64;
  }
}
