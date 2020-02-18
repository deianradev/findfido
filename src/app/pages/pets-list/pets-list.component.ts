import { Component, OnInit, OnDestroy } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';
import { Pet } from 'src/app/models/pet';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit, OnDestroy {

  pets$: any;
  pets: Pet[];
  types: string[] = ['Dog', 'Cat'];
  selectedType: string;

  constructor(private svc: PetService) { }

  ngOnInit(): void { }

  ngOnDestroy() {
    if (this.pets$) {
      this.pets$.unsubscribe();
    }
  }

  filter() {
    this.pets$ = this.svc.searchPetsByType(this.selectedType).subscribe(res => {
      this.pets = res;
    })
  }
}
