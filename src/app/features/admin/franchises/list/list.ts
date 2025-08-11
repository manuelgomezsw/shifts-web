import { Component } from '@angular/core';
import {FormHeader} from "../../../../shared/form-header/form-header";
import {MatButton, MatIconButton} from '@angular/material/button';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [
    FormHeader,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatIcon,
    MatIconButton,
    MatColumnDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatCellDef,
    MatHeaderCellDef,
    RouterLink,
    FormsModule,
  ],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class FranchiseListComponent {
  columnsToDisplay = ['name', 'location', 'active', 'actions'];
}
