

firebase.auth()
.onAuthStateChanged(user=>{
    if (user) {
        alert("LOGGED IN");  
    } else {
        console.log("Not signed in");
    }
  });
  
$(document).ready(()=>{   
    $("#facebook-login").click(facebookLogin); 
    $("#signout").click(signout); 
});

function signout()
{
    firebase.auth().signOut()
    .then(()=>{
        alert("Signed out");
    }).catch(function(error) {
        alert("Error signing out: "+ error);
    });
}

function facebookLogin()
{
    SetRemember();
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider)
    .then(()=>{
        console.log("FB signin completed");
    }).catch(error=>{
      const errorCode = error.code;
        if (errorCode === 'auth/cancelled-popup-request') {
            alert("Error: Popup cancelled. Please check for other popups and try again.");
        } else if (errorCode === 'auth/popup-closed-by-user') {
            alert("Sign in cancelled by user.");
        } else if (errorCode === 'auth/popup-blocked') {
            alert("The sign in popup was blocked.");
        } else if (errorCode === 'auth/account-exists-with-different-credential') {
            alert("The email address is being used on an account with a different provider.");
        } else if (errorCode === 'auth/unauthorized-domain') {
            alert("This domain is not authorised.");
        } else {
            alert("Unhandled sign in error.",error); 
        }
    });
}

function SetRemember()
{
    const remember = $("#remember-checkbox").prop("checked");
    let persistance = remember ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION;
    firebase.auth().setPersistence(persistance)
    .then(()=>{
        console.log("Persistance updated");
    }).catch(error=>{
        alert("Error updating persistance state: "+error.message);
    });
}