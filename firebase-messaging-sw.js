importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD74zIkwLsTjv_u_vdYqOy5Kv4pRDzd8hI",
  authDomain: "barchalor.firebaseapp.com",
  projectId: "barchalor",
  storageBucket: "barchalor.firebasestorage.app",
  messagingSenderId: "404904480968",
  appId: "1:404904480968:web:f53c8182ee4202dc8795fd"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || 'Barchalor';
  const options = {
    body: payload.notification?.body || 'You have a new notification.',
    data: payload.data || {}
  };

  self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  event.waitUntil(
    clients.openWindow('https://qlitobadys-lab.github.io/barchalor-app/')
  );
});
