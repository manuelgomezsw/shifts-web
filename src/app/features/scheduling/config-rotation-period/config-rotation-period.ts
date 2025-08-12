import {Component} from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatCard, MatCardContent, MatCardFooter, MatCardTitle} from '@angular/material/card';

@Component({
  selector: 'app-config-rotation-period',
    imports: [
        FormsModule,
        MatButton,
        MatCard,
        MatCardContent,
        MatCardFooter,
        MatCardTitle,
        MatFormField,
        MatLabel,
        MatOption,
        MatSelect
    ],
  templateUrl: './config-rotation-period.html',
  styleUrl: './config-rotation-period.css'
})
export class ConfigRotationPeriod {

}
