import {Component, Input} from '@angular/core';
import {FormHeaderMode} from '../enums/form-header.component';

@Component({
  selector: 'app-form-header',
  standalone: true,
  imports: [],
  templateUrl: './form-header.html',
  styleUrl: './form-header.css'
})
export class FormHeader {
  @Input() mode: FormHeaderMode = FormHeaderMode.None;
  @Input() entityName: string = '';

  formHeaderEnum = FormHeaderMode;
}
