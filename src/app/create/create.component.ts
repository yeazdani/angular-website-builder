import { AppModel } from './../model/app.model';
import { AppService } from './../app.service';
import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { CdkDragSortEvent, CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})


export class CreateComponent implements OnInit {

  HTMLObject: any;

  buttons: any[] = [];
  inputs: any[] = [];
  alerts: any[] = [];
  navs: any[] = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getData().subscribe(
      (res: AppModel) => {
        this.HTMLObject = res;
      }
    )
  }

  onClick(value: ElementRef) {
    console.log(value)
  }

  addContent(value) {
    switch (value) {
      case 'btn': this.buttons.push(1);
        break;
      case 'input': this.inputs.push(1);
        break;
      case 'nav': this.navs.push(1);
        break;
      case 'alert': this.alerts.push(1);
        break;

      default:
      //default block statement;
    }
  }

  deleteContent(value) {
    switch (value) {
      case 'btn': this.buttons.pop();
        break;
      case 'input': this.inputs.pop();
        break;
      case 'nav': this.navs.pop();
        break;
      case 'alert': this.alerts.pop();
        break;

      default:
      //default block statement;
    }
  }

}
