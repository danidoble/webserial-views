import {useState, useEffect} from "react";
import {Devices} from "@danidoble/webserial";
import PropTypes from "prop-types";
import './events.css'

export function Events() {
    // eslint-disable-next-line no-unused-vars
    const [devices, setDevices] = useState([]);
    const [alerts, setAlerts] = useState([]);

    let timeout = 0;

    useEffect(() => {
        Devices.instance.on('change', () => {
            poolDevices();
        });
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
                        let type = 'ws-alert-info';
                        let message = 'Device connecting';
                        if (listener.type === 'serial:connected') {
                            type = 'ws-alert-success';
                            message = 'Device connected';
                        } else if (listener.type === 'serial:disconnected') {
                            type = 'ws-alert-error';
                            message = 'Device disconnected';
                        }

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
        <div className="ws-fixed ws-z-[60] ws-bottom-4 ws-right-4 ws-grid ws-gap-2">
            {alerts.map((alert, index) => (
                <Alert key={`alert-ws-${index}`} message={alert.message} type={alert.type}/>
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
        <div role="alert" className={`ws-alert ${type}`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="ws-h-6 ws-w-6 ws-shrink-0 ws-stroke-current">
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