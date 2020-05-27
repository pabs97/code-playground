const messages = [
  { message: 'message 1', time: 5, element: 'el1' },
  { message: 'message 2', time: 8, element: 'el2' },
  { message: 'message 3', time: 3, element: 'el3' }
];

let element = '';
let queue = [...messages];

createTimeout();



function createTimeout() {
  if (!queue.length) {
    console.log('done');
    return;
  }

  const { message, time } = queue.shift();
  element = message;
  console.log('setting message', message, 'for', time, 'seconds');

  setTimeout(() => {
    element = '';
    createTimeout();
  }, time * 1000);
}