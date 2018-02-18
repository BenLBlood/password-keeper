import { Component, OnInit } from '@angular/core';
import { Password } from '../models/password.model';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-password-dialog',
  templateUrl: './password-dialog.component.html',
  styleUrls: ['./password-dialog.component.scss']
})
export class PasswordDialogComponent implements OnInit {

  formPassword: Password;
  constructor(private dialogRef: MatDialogRef<PasswordDialogComponent>) {
    this.formPassword = new Password();
  }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log('TODO: Submit: ', this.formPassword);
    this.dialogRef.close();
  }
}
