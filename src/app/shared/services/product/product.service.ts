import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  DocumentReference,
  CollectionReference
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../../../models/product/product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productCollection: CollectionReference<Product>;

  constructor(private firestore: Firestore) {
    this.productCollection = collection(this.firestore, 'products') as CollectionReference<Product>;
  }

  getAllProducts(): Observable<Product[]> {
    return collectionData(this.productCollection, { idField: 'id' }) as Observable<Product[]>;
  }

  addProduct(product: Product): Promise<void> {
    const newDocRef = doc(this.productCollection);
    const newProduct: Product = { ...product, id: newDocRef.id };
    return setDoc(newDocRef, newProduct);
  }

  updateProduct(product: Product): Promise<void> {
    const productDocRef = doc(this.firestore, `products/${product.id}`) as DocumentReference<Product>;
    return updateDoc(productDocRef, { ...product });
  }

  deleteProduct(id: string): Promise<void> {
    const productDocRef = doc(this.firestore, `products/${id}`) as DocumentReference<Product>;
    return deleteDoc(productDocRef);
  }
}
