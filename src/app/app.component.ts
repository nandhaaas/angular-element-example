import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() serviceUrl: string;
  @Output() cancel = new EventEmitter();

  formGroup: FormGroup;
  option: string;
  showSuccess = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      comments: [''],
      option: ['']
    });
  }

  onOption() {
    this.formGroup.reset(); 
  }

  save() {
    this.formGroup.markAllAsTouched();
    if(this.formGroup.valid) {
      this.showSuccess = true;
    }
  }

  onCancel() {
    this.cancel.emit();
  }

}
