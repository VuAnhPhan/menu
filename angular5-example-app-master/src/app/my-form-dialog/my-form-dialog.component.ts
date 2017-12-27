import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-my-form-dialog',
  templateUrl: './my-form-dialog.component.html',
  styleUrls: ['./my-form-dialog.component.css']
})
export class MyFormDialogComponent {
  
    animal: string;
    name: string;
  
    constructor(public dialog: MatDialog) {}
  
    openDialog(): void {
      let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '250px',
        data: { name: this.name, animal: this.animal }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.animal = result;
      });
    }
  
  }
  
  @Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: './my-box.component.html',
  })
  export class DialogOverviewExampleDialog {
  
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }
  