import { Component } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  activeChild: number = 0;

  toggleChild(childNumber: number) {
    if (childNumber === this.activeChild) {
      this.activeChild = 0;
    } else {
      this.activeChild = childNumber;
    }
  }
}
