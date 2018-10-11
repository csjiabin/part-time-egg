import io from 'socket.io-client';
const isLocal = (window as any).location.href.indexOf('debug') !== -1 || false;
const server =
  process.env.NODE_ENV === 'development' || isLocal
    ? 'http://127.0.0.1:7001/'
    : 'https://www.hjbnice.com/';
const socket = io(server, {
  query: {
    room: 'room110'
  }
});
export default socket;
