import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators, NgForm, FormGroupDirective } from '@angular/forms';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent {
  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;

  petForm = this.fb.group({
    name: [null, Validators.required],
    description: [null, Validators.required],
    type: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private svc: PetService) { }

  onSubmit() {
    let data = Object.assign({}, this.petForm.value);
    this.svc.addPet(data)
      .then(
        res => {
          this.resetFields();
        }
      )
  }

  resetFields() {
    this.formDirective.resetForm();
  }
}
