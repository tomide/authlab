import * as firebase from 'firebase';
import { devConfig } from './config';

!firebase.apps.length && firebase.initializeApp(devConfig);

const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

const storage = firebase.storage();

export {
    auth,
    googleAuthProvider,
    facebookAuthProvider,
    storage
}