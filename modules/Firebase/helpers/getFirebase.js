import firebase from 'firebase';

export default config => () => (firebase.apps.length ? firebase.app() : firebase.initializeApp(config));
