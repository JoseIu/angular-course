import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from '../../components/aside/aside.component';

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, AsideComponent],
  templateUrl: './dashboard-page.component.html',
})
export default class DashboardPageComponent {}
