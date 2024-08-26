//import {Arduino} from 'webserial';
import {Boardroid} from 'webserial';

// const machine = new Arduino();
const machine = new Boardroid();
// const machine2 = new Arduino({no_device: 2});
// const machine3 = new Arduino({no_device: 3});
// const machine4 = new Arduino({no_device: 4});

// machine.on('serial:message', data => {
//     console.log(data);
// });

function tryConnect() {
    machine.connect().then(() => {
        console.log('connected');
    }).catch((err) => {
        console.error(err);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    tryConnect();
});