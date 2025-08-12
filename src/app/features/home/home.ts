import {Component} from '@angular/core';
import {ConfigRotationPeriod} from '../scheduling/config-rotation-period/config-rotation-period';

@Component({
  selector: 'app-home',
  imports: [
    ConfigRotationPeriod
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

}
