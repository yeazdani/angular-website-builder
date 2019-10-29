import { Component } from '@angular/core';
import { AppService } from './app.service';
import { AppModel } from './model/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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
    }
  }
}
