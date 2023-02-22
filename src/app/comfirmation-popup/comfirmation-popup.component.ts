import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-comfirmation-popup',
  template: `
  <h2 mat-dialog-title>{{ data.title }}</h2>
  <mat-dialog-content>
    <p>{{ data.message }}</p>
  </mat-dialog-content>
  <mat-dialog-actions>
    <button mat-button (click)="onCancelClick()">Annuler</button>
    <button mat-button color="primary" (click)="onConfirmClick()">Confirmer</button>
  </mat-dialog-actions>
`,
})
export class ComfirmationPopupComponent {
  constructor(
    public dialogRef: MatDialogRef<ComfirmationPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; message: string },
    private router: Router
  ) {}

  onCancelClick(): void {
    this.dialogRef.close(false);
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
    this.router.navigate(['/acceuil']);
  }
}
