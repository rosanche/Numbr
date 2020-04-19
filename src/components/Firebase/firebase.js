import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD2siZrRjcMvI4cApnYYYAzfOPh_2vEdPw",
    authDomain: "numbr-d1a20.firebaseapp.com",
    databaseURL: "https://numbr-d1a20.firebaseio.com",
    projectId: "numbr-d1a20",
    storageBucket: "",
    messagingSenderId: "585598545664",
    appId: "1:585598545664:web:ef90a311b5cd280b"
};

export default class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth()
    }

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut()
}

