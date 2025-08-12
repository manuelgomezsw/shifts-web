import {Component, Input} from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-status-select',
  imports: [
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption
  ],
  templateUrl: './status-select.html',
  styleUrl: './status-select.css'
})
export class StatusSelectComponent {
  @Input() label: string = 'Estado';

  value: boolean = true;
  onChange = (value: boolean) => {};
  onTouched = () => {};

  writeValue(value: boolean): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Opcional: manejar deshabilitación
  }

  updateValue(newValue: boolean): void {
    this.value = newValue;
    this.onChange(newValue);
    this.onTouched();
  }
}
