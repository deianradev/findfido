import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Pet } from '../models/pet';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private firestore: AngularFirestore) { }

  addPet(pet: Pet) {
    return this.firestore.collection('pets').add(pet);
  }

  updatePet(pet: Pet) {
    //delete pet.id;
    //this.firestore.doc('pets/' + pet.id).update(pet);
  }

  deletePet(petId) {
    //this.firestore.doc('pet/' + petId).delete();
  }

  searchPet() {

  }

  searchPetsByType(type): Observable<Pet[]> {

    return this.firestore.collection<Pet>('pets', ref => ref.where('type', '==', type))
      .snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Pet;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }
  getAllPets() {
    return this.firestore.collection('pets').snapshotChanges();
  }
}
