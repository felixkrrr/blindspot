import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { userInfo } from "os";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  attachAuthIsReady: true
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.firestore();
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  // *** User API ***
  user = uid => this.db.doc(`users/${uid}`);
  users = () => this.db.collection("users");

  // *** Merge Auth and DB User API *** //
  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        next(authUser);
      } else {
        fallback();
      }
    });

  // *** Adjectives API ***

  adjectivesSelectedBySelf = uid =>
    this.db
      .collection("users")
      .doc(`${uid}`)
      .collection("selectedBySelf")
      .doc("selection");

  adjectivesSelectedByOthers = uid =>
    this.db
      .collection("users")
      .doc(`${uid}`)
      .collection("selectedByOthers")
      .doc("selection");

  updateAdjectivesSelectedBySelf = (uid, array) =>
    this.db
      .collection("users")
      .doc(`${uid}`)
      .collection("selectedBySelf")
      .doc("selection")
      .set({ adjectives: [...array] });
}

export default Firebase;

/* 

----- Put following Code in Adjectives API -----
 baseAdjectives = () =>
    this.db.collection("baseAdjectives").doc("baseAdjectives");


----- Put this in the Components that needs Basedadjectives from Firebase -----    
 componentDidMount() {
    this.setState({ loading: true });

    const baseAdjectives = this.props.firebase.baseAdjectives();

    baseAdjectives.get().then(doc => {
      this.setState({ adjectives: doc.data().adjectives });
    });

    this.setState({ loading: false });
  }
*/
