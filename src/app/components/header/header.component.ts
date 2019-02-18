import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  changeTabs(event: Event) {
    event.preventDefault();
    let mainNavBarEls = document.querySelectorAll('#main-nav-bar .nav-link');
    for (let i=0; i<mainNavBarEls.length; i++) {
      mainNavBarEls[i].classList.remove('active');
    }
    let el = <HTMLInputElement>event.target;
    el.classList.add('active');
  }

}