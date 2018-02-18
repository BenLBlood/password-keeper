import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

import { Password } from '../models/password.model';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  private authStateSubscription: Subscription;
  private itemsCollection: AngularFirestoreCollection<Password>;
  public passwordStream: Observable<Password[]>;
  

  constructor(private afAuth: AngularFireAuth, 
    private afs: AngularFirestore,
    private router: Router) {
  }
  
  ngOnInit(): void {
    this.authStateSubscription = this.afAuth.authState.subscribe((user: firebase.User) => {
      if (user) {
        // Signin just happened
        console.log("User is signed in as: " + user.displayName);
        const firebasePath = `users/${user.displayName}/passwordlist`;
        
        this.itemsCollection = this.afs.collection<Password>(firebasePath);
        console.log("stuff");
        this.passwordStream = this.itemsCollection.snapshotChanges().map(actions => {
          return actions.map(a => {
            
            const data = a.payload.doc.data() as Password;
            console.log(data);
            const $key = a.payload.doc.id;
            return { $key, ...data };
          });
        });
        console.log(this.passwordStream);

      } else {
        // Signout just happened
        console.log("User is not signed in.");
        this.router.navigate(['/signin']);
      }
    })
  }

  ngOnDestroy(): void {
    this.authStateSubscription.unsubscribe();
  }
}

