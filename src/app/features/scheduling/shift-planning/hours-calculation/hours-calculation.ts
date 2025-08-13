import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HourSummary} from '../../../../models/hour-summary';
import {MatCard} from '@angular/material/card';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatButton} from '@angular/material/button';
import {FormHeader} from '../../../../shared/form-header/form-header';

@Component({
  selector: 'app-hours-calculation',
  standalone: true,
  imports: [
    MatCard,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatColumnDef,
    MatHeaderCellDef,
    MatCellDef,
    MatButton,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    FormHeader
  ],
  templateUrl: './hours-calculation.html',
  styleUrl: './hours-calculation.css'
})
export class HoursCalculation {
  @Input() hoveredEmployee: string | null = null;
  @Output() hoverChange = new EventEmitter<string | null>();
  periods = ['1-15 Agosto', '16-31 Agosto'];

  dataSource: HourSummary[] = [
    { employee: 'Valentina', ordinary: 80, extra: 5, sunday: 4, hasAbsences: true },
    { employee: 'Arnaldis', ordinary: 78, extra: 6, sunday: 3, hasAbsences: true },
    { employee: 'Sirelda', ordinary: 78, extra: 6, sunday: 3, hasAbsences: true }
  ];

  columnsToDisplay = ['employee', 'ordinary', 'extra', 'sunday', 'absences'];

  viewAbsences(employee: string) {
    console.log('Ver ausencias de', employee);
    // Aquí podrías abrir un modal o navegación
  }
}
