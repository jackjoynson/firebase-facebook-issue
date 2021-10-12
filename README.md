# Firebase Facebook login issue

## Issue description
On some occasions the Facebook login process completes but the Firebase auth library acts as if the user is not signed in. ```firebase.auth().onAuthStateChanged(user=>{});``` returns null even though the Facebook sign in process completes successfully. 

This issue is intermittent. On most occasions the sign in completes fine but on some occasions it fails. Once failure happens for a Facebook account it will continue to fail. I cannot see anything in the console to suggest why the error happens. 

## Process to set up

- Create Firebase project
- Add Facebook to the Firebase project auth list.
- Create Facebook develop project, enable Facebook sign in. 
- Add the OAUTH and domain to Firebase auth and Facebook developer project settings.
- Set the firebaseConfig in the HTML file.
- Deploy the html and js files. 
- Create Facebook test user(s). 

## Process to replicate issue

- Click button to sign in with Facebook. Follow process through by logging into Facebook test account. 
> Should be redirected back to main page and get alert that signed in. 
- Click logout and repeat process with the same or different user. 
> On some occasions the sign in returns but do not get the signed in alert. This issue only happens occasionally. 

## Thoughts for potential issues

- Clicking the Facebook login button again when you have just been redirected back to the page after already completing the sign in flow. 
- Signing out then immediately signing back in with the same account. 
- Disabling sharing data cookies with Third party apps from the Facebook settings on one of the test accounts (I have had it fail after setting this).
- Log in successfully then remove the application from the Facebook user's allowed applications. Try and log back in. (I have had it fail after doing this too).


