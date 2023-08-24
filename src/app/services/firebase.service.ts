import { Injectable } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { addDoc, collection, collectionData, CollectionReference, doc, docData, Firestore, getDoc, getFirestore, setDoc, updateDoc } from '@angular/fire/firestore';
/* import {CollectionReference, Firestore} from '@angular/fire/firestore'; */
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  app = initializeApp(environment.firebase);
  db = getFirestore(this.app);
  private itemsCollection?: any;

  constructor(private firestore: Firestore) {
    this.itemsCollection = collection(this.firestore, "INVITADOS");
  }

  getItems() {
    return collectionData(this.itemsCollection, { idField: "id" }) as Observable<any>;
  }

  getItem(id: string) {
    const docRef = doc(this.db, "INVITADOS", id);
    return docData(docRef, { idField: "id" }) as Observable<any>;
  }

  updateItem(id: string, updatedData: any) {
    const docRef = doc(this.db, "INVITADOS", id);
    return updateDoc(docRef, updatedData);
  }

  async addItem(item: any) {
    /* const docRef = doc(this.db, "INVITADOS");
    return await setDoc(docRef,item) */
    return await addDoc(collection(this.db, "INVITADOS"), item);
  }

  /* private itemsCollection: CollectionReference<any>;
  items: Observable<any[]>;

  constructor(private afs: Firestore) {
    this.itemsCollection = afs.collection<any>('items');
    this.items = this.itemsCollection.valueChanges();
  }

  // Create
  addItem(item: any) {
    return this.itemsCollection.add(item);
  }

  // Read
  getItems() {
    return this.items;
  }

  // Update
  updateItem(id: string, updatedData: any) {
    return this.itemsCollection.doc(id).update(updatedData);
  }

  // Delete
  deleteItem(id: string) {
    return this.itemsCollection.doc(id).delete();
  } */
}



