import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  constructor(private db: AngularFirestore) {
    const things = db.collection('pets').valueChanges();
    things.subscribe(console.log)
  }

  ngOnInit(): void {
  }

}
