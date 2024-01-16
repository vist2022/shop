import {doc, getDoc, setDoc, deleteDoc, collection} from 'firebase/firestore';
import {ProductShoppingCardType} from "../utils/types";
import {db} from "./firebase-config";
import {collectionData} from "rxfire/firestore";
import {Observable} from "rxjs";


export async function addShoppingProduct(collectionName: string, productId: string, shoppingProduct: ProductShoppingCardType) {
    const docRef = doc(db, collectionName, productId);
    await setDoc(docRef, shoppingProduct);
}

export async function removeShoppingProduct(collectionName: string, productId: string) {
    const docRef = doc(db, collectionName, productId);
    await deleteDoc(docRef);
}


export async function addShoppingProductUnit(collectionName: string, productId: string) {
    const docRef = doc(db, collectionName, productId);
    const docSnapshot = await getDoc(docRef);
    const docData = docSnapshot.data();
    let count = 0;
    if (docData)
        count = docData.count;
    await addShoppingProduct(collectionName, productId, {productId, count: count + 1})
}

export async function removeShoppingProductUnit(collectionName: string, productId: string) {
    const docRef = doc(db, collectionName, productId);
    const docSnapshot = await getDoc(docRef);
    const docData = docSnapshot.data();
    if (docData) {
        const count = docData.count;
        if (count == 1)
            await removeShoppingProduct(collectionName, productId);
        else
            await addShoppingProduct(collectionName, productId, {productId, count: count - 1})
    }
}

export function getShoppingCard(collectionName: string):Observable<ProductShoppingCardType[]> {
    const collectionRef = collection(db, collectionName);
    return collectionData(collectionRef) as Observable<ProductShoppingCardType[]>
}