import {Arduino} from 'webserial';

const arduino = new Arduino();
// const arduino2 = new Arduino({no_device: 2});
// const arduino3 = new Arduino({no_device: 3});
// const arduino4 = new Arduino({no_device: 4});

// arduino.on('serial:message', data => {
//     console.log(data);
// });

function tryConnect() {
    arduino.connect().then(() => {
        console.log('connected');
    }).catch((err) => {
        console.error(err);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    tryConnect();
});