import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MainLayout} from './shared/main-layout/main-layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainLayout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('shifts-web');
}
