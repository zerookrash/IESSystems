import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  createFormGroup() {
    return new FormGroup({
      id: new FormControl('')
    });
  }

  idForm: FormGroup

  constructor(private idData: RequestService) {
    this.idForm = this.createFormGroup();
   }

  ngOnInit() {
  }

  onResetForm() {
    this.idForm.reset();
  }

  onSubmit() {
    this.idData.reqData(this.idForm.value.id);
  }

}
