import { Component } from '@angular/core';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html'
})
export class TestFormComponent {

  userName = '';
  userWasReset = false;

  disabledButton() {
    if (this.userName !== '') {
      return false;
    }
    return true;
  }

  resetUserName() {
    this.userName = '';
    this.userWasReset = true;
  }

  log(event: Event) {
    console.log(event);
  }

}
