import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatTableModule, MatToolbarModule, MatIconModule],
  exports: [MatTableModule, MatToolbarModule, MatIconModule],
})
export class MaterialModule {}
