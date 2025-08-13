import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatCard} from '@angular/material/card';
import {
  MatCell,
  MatCellDef, MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {NgForOf} from '@angular/common';
import {FormHeader} from '../../../../shared/form-header/form-header';

@Component({
  selector: 'app-shift-table',
  standalone: true,
  imports: [
    MatCard,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatHeaderCellDef,
    MatCellDef,
    NgForOf,
    MatHeaderRowDef,
    MatRowDef,
    MatColumnDef,
    FormHeader
  ],
  templateUrl: './shift-table.html',
  styleUrl: './shift-table.css'
})
export class ShiftTableComponent {
  @Input() rotation: 'weekly' | 'biweekly' | 'monthly' = 'weekly';
  @Input() data: EmployeeShift[] = [];
  @Input() hoveredEmployee: string | null = null;
  @Output() hoverChange = new EventEmitter<string | null>();

  columnsToDisplay: string[] = [];

  ngOnInit(): void {
    this.generateColumns();
  }

  generateColumns(): void {
    this.columnsToDisplay = ['employee'];

    switch (this.rotation) {
      case 'weekly':
        this.columnsToDisplay.push('week1', 'week2', 'week3', 'week4', 'week5');
        break;
      case 'biweekly':
        this.columnsToDisplay.push('firstHalf', 'secondHalf');
        break;
      case 'monthly':
        this.columnsToDisplay.push('month');
        break;
    }
  }

  getColumnLabel(col: string): string {
    const labels: Record<string, string> = {
      employee: 'Empleado',
      week1: 'Semana 1',
      week2: 'Semana 2',
      week3: 'Semana 3',
      week4: 'Semana 4',
      week5: 'Semana 5',
      firstHalf: '1–15',
      secondHalf: '16–31',
      month: 'Mes'
    };
    return labels[col] || col;
  }
}
