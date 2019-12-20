import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomService } from './custom.service';

@Component({
  selector: 'custom-component',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  @Input("service-url") serviceUrl: string;
  @Input("user-id") userId: string;
  @Input("role") role: string;
  @Output() cancel = new EventEmitter();

  formGroup: FormGroup;
  option: string;
  showSuccess = false;

  constructor(private fb: FormBuilder, private customService: CustomService) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      userId: [this.userId],
      role: [this.role],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      comments: [''],
      type: ['']
    });
  }

  onOption() {
    this.formGroup.reset({ userId: this.userId, role: this.role});
  }

  onSave() {
    this.formGroup.markAllAsTouched();
    if(this.formGroup.valid) {
      this.formGroup.get('type').setValue(this.option);
      console.log(this.formGroup.value);
      this.customService.saveData(this.serviceUrl, this.formGroup.value).subscribe(res => {
        this.showSuccess = true;
      });
    }
  }

  onCancel() {
    this.cancel.emit();
  }

}
