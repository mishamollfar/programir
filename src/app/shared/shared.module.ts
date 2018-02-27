import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatMenuModule, MatNativeDateModule,
  MatOptionModule, MatProgressSpinnerModule, MatRippleModule, MatSelectModule,
  MatSidenavModule, MatSlideToggleModule, MatSnackBarModule, MatStepperModule, MatTableModule, MatTabsModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {OverlayModule} from '@angular/cdk/overlay';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    OverlayModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatOptionModule,
    MatRippleModule,
    MatSelectModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatSnackBarModule,
    MatStepperModule,
    MatButtonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule
  ],
  declarations: [],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    OverlayModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatOptionModule,
    MatRippleModule,
    MatSelectModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatSnackBarModule,
    MatStepperModule,
    MatButtonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule
  ]
})
export class SharedModule { }