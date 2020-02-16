import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent {
  petForm = this.fb.group({
    name: [null, Validators.required],
    description: [null, Validators.required],
    type: ['', Validators.required]
  });


  constructor(private fb: FormBuilder, private svc: PetService) { }

  onSubmit() {

  }
}
