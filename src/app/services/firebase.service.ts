import {Injectable} from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  updateDoc
} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import { TodoModel } from '../models/todoModel';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {



  constructor(private firestore: Firestore) {
  }

  getAllUser(): Observable<User[]> {
    const usersRef = collection(this.firestore, 'users');
    return collectionData(usersRef, {idField: 'id'}) as Observable<User[]>;
  }

  login(id: string): Observable<User> {
    const userDocRef = doc(this.firestore, `users/${id}`);
    return docData(userDocRef, {idField: 'id'}) as Observable<User>;
  }

  register(user: User) {
    const usersRef = collection(this.firestore, 'users');
    return addDoc(usersRef, user);
  }

  delete(user: User) {
    const userDocRef = doc(this.firestore, `users/${user.id}`);
    return deleteDoc(userDocRef);
  }

  update(user: User) {
    const userDocRef = doc(this.firestore, `users/${user.id}`);
    return updateDoc(userDocRef, {
      name: user.name,
      surname: user.surname,
      age: user.age,
      email: user.email,
      password: user.password,
      id: user.id
    });
  }

  getAllTodos(){
    const todoDocRef = collection(this.firestore, 'todos');
    return collectionData(todoDocRef, {idField: 'id'}) as Observable<TodoModel[]>;
  }
  addTodo(todo:TodoModel){
    const todosRef = collection(this.firestore, 'todos');
    return addDoc(todosRef, todo);
  }
  deleteTodo(todo:TodoModel)
  {
      const todoDocRef = doc(this.firestore, `users/${todo.id}`);
      return deleteDoc(todoDocRef);
  }
}
