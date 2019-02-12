import { Component } from '@angular/core';

@Component({
  selector: 'alert-warning',
  template: '<div class="alert alert-warning">{{text}}</div>'
})
export class AlertWarningComponent {
  text = 'This is a Warning Alert!';
}
