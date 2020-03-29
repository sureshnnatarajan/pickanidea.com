import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'pickanidea-com';
  //images = ['./assets/bg-masthead.jpg','./assets/6895187159_2f1cf391a3_w.jpg', './assets/5430683205_d58b1df36c_w.jpg', './assets/7184081947_a6d48f3f93_w.jpg'];
  //images = ['./assets/bg-masthead.jpg'];
  //images = ['./assets/white-background.png'];

  constructor(private modalService: NgbModal) {}

  closeResult = '';

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed.`;
    });
  }
}
