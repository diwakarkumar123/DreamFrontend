import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';



GoogleSignin.configure({
  webClientId: '505235781427-9013t2u2nlkv8mmj3srlca5q4q4kh5lc.apps.googleusercontent.com',
});

// export async function onGoogleButtonPress() {
//   // Get the users ID token
//   const { idToken } = await GoogleSignin.signIn();
//   console.log('sohailidToken',idToken);
//   // Create a Google credential with the token
//   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//   // Sign-in the user with the credential
//   return auth().signInWithCredential(googleCredential);
// }

export async function onGoogleButtonPress() {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}