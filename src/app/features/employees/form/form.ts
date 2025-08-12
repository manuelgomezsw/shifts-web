import { Component } from '@angular/core';
import {FormHeader} from '../../../shared/form-header/form-header';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatCard, MatCardContent, MatCardFooter} from '@angular/material/card';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {RouterLink} from '@angular/router';
import {StatusSelectComponent} from '../../../shared/status-select/status-select';
import {MatOption, MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-form',
  imports: [
    FormHeader,
    FormsModule,
    MatButton,
    MatCard,
    MatCardContent,
    MatCardFooter,
    MatFormField,
    MatInput,
    MatLabel,
    RouterLink,
    StatusSelectComponent,
    MatFormField,
    MatOption,
    MatSelect
  ],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class EmployeeFormComponent {

}
