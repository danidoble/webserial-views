import {useState, useEffect} from "react";
import {Devices} from "webserial";
import PropTypes from "prop-types";

export function Events() {
    // eslint-disable-next-line no-unused-vars
    const [devices, setDevices] = useState([]);
    const [alerts, setAlerts] = useState([]);

    let timeout = 0;

    Devices.instance.on('change', () => {
        poolDevices();
    });

    useEffect(() => {
        poolDevices();
    }, []);

    function poolDevices() {
        const _devices = Devices.getList();
        const listeners = ['serial:connected', 'serial:disconnected', 'serial:connecting'];
        for (const device of _devices) {
            const _to_listen = device.availableListeners.filter((listener) => !listener.listening && listeners.includes(listener.type));
            if (_to_listen.length > 0) {
                for (const listener of _to_listen) {
                    device.on(listener.type, () => {
                        console.log(listener.type);
                        const type = listener.type === 'serial:connected' ? 'alert-success' : listener.type === 'serial:disconnected' ? 'alert-error' : 'alert-info';
                        const message = listener.type === 'serial:connected' ? 'Device connected' : listener.type === 'serial:disconnected' ? 'Device disconnected' : 'Device connecting';

                        const oldAlerts = [...alerts];
                        oldAlerts.push({message, type});
                        setAlerts([...oldAlerts]);

                        if (timeout) {
                            clearTimeout(timeout);
                        }

                        timeout = setTimeout(() => {
                            const _alerts = [...alerts];
                            _alerts.shift();
                            setAlerts([..._alerts]);
                        }, 5000);
                    });
                }
            }
        }
        setDevices(_devices);
    }

    return (<>
        <div className="fixed z-[60] bottom-4 right-4 grid gap-2">
            {alerts.map((alert, index) => (
                <Alert key={index} message={alert.message} type={alert.type}/>
            ))}
        </div>
    </>);
}

Alert.propTypes = {
    message: PropTypes.string,
    type: PropTypes.string,
};

function Alert({message, type}) {

    return (
        <div role="alert" className={`alert ${type}`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 shrink-0 stroke-current">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>{message}</span>
        </div>
    )
}