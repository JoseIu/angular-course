import { Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  env = environment;
}
