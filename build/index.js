import App from './src/App.svelte.js';

const socket = new WebSocket("ws://localhost:3000/ws");

const reloadWindow = () => {
  window.location.reload();
};

socket.addEventListener("open", function (_event) {
  socket.send("Listening for changes");
});

socket.addEventListener("message", function (event) {
  if (event.data === 'reload window') {
    reloadWindow();
  }

  console.log(event.data)
});

const app = new App({
  target: document.body,
});

export default app;