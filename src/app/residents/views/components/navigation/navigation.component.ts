import {Component} from "@angular/core"

@Component({
  template: `
    <nav>
      <a routerLink=""><img src="/assets/images/logo-svgs/Visitors.svg" alt="Visitors" /></a>
      <a routerLink=""><img src="/assets/images/logo-svgs/Notification.svg" alt="Notifications" /></a>
      <a routerLink=""><img src="/assets/images/logo-svgs/Profile.svg" alt="Profile" /></a>
    </nav>
  `,
  standalone: true
})

export default class NavigationBar {}
