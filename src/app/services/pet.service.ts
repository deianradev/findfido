import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Pet } from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private firestore: AngularFirestore) { }

  addPet(pet: Pet) {
    return this.firestore.collection('pets').add(pet);
  }

  updatePet(pet: Pet) {
    delete pet.id;
    this.firestore.doc('pets/' + pet.id).update(pet);
  }

  deletePet(petId) {
    this.firestore.doc('pet/' + petId).delete();
  }

  searchPet() {

  }

  getAllPets() {
    return this.firestore.collection('pets').snapshotChanges();
  }
}
