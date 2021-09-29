const Websocket = require('ws');

const server = new Websocket.Server({ port: 3333 });
console.log('server start');

server.on('connection', (ws) => {
  ws.on('message', (message) => {
    if (message === 'exit') {
      ws.close();
      console.log('connection close');
    } else {
      server.clients.forEach((client) => {
        if (client.readyState === Websocket.OPEN) {
          client.send(message);
        }
      });
    }
  });
});
