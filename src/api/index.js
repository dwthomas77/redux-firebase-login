const methods = (firebase) => ({
    
    loginUser({email, password}) {
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .catch( (error) => { reject(error); });
        });
    },
    
    logoutUser() {
        return new Promise((resolve, reject) => {
            firebase.auth().signOut()
                .then(() => {resolve()})
                .catch((error) => {reject(error)});
        });
    },
    
    registerUser({email, password}) {
        return new Promise((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .catch((error) => {
                    reject(error); 
                });
        });
    }
});

export default (type) => (request) => {
    const firebase = window._FIREBASE_;
    const api = methods(firebase);
    return api[type](request);
}

