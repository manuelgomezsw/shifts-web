import {Component} from '@angular/core';
import {FormHeader} from '../../../../shared/form-header/form-header';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {MatCard, MatCardContent, MatCardFooter} from '@angular/material/card';
import {MatOption, MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-form',
  imports: [
    FormHeader,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    MatCard,
    MatCardContent,
    MatCardFooter,
    MatSelect,
    MatOption
  ],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class FranchiseFormComponent {
}
