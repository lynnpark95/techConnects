const Pusher = require('pusher');

const pusher = new Pusher({
  appId: "1685414",
  key: "cb78a53cfed82eb19581",
  secret: "c52e331e45f7964616d4",
  cluster: "us3",
  useTLS: true
});

const setupPusher = (db) => {
  db.once('open', () => {
    console.log('DB Connected to Pusher')
    const msgCollection = db.collection('messages')
    const changeStream = msgCollection.watch()
    changeStream.on('change', (change) => {
      if (change.operationType === 'insert') {
        const messageDetails = change.fullDocument;
        pusher.trigger('messages', 'inserted', {
          name: messageDetails.name,
          message: messageDetails.message,
          timestamp: messageDetails.timestamp,
          received: messageDetails.received,
        });
      } else {
        console.log('Error triggering Pusher')
      }
    })
  })
}

module.exports = { setupPusher };