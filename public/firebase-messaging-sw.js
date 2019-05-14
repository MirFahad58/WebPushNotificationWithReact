// [START initialize_firebase_in_sw]
 // Give the service worker access to Firebase Messaging.
 // Note that you can only use Firebase Messaging here, other Firebase libraries
 // are not available in the service worker.
 importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
 // Initialize the Firebase app in the service worker by passing in the
 // messagingSenderId.
 firebase.initializeApp({'messagingSenderId': '1027703990575'});
 // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.
 const messaging = firebase.messaging();
 // [END initialize_firebase_in_sw]


// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]
// messaging.onMessage(function(payload) {
//   console.log('Message received. ', payload);
//   setTimeout(() => {
//       var notificationTitle = "Test";
//       var notificationOptions = {
//           body: "Body",
//       };
//       console.log(notificationTitle, notificationOptions);
//       swRegistration.showNotification(notificationTitle, notificationOptions);
//   }, 100);
// });
messaging.setBackgroundMessageHandler((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.'
    // icon: '/firebase-logo.png'
  };
 
  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});
// [END background_handler]
