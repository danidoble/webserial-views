import {useState, useEffect} from "react";
import {Devices} from "webserial";
import './permissions.css';

export function Permissions() {
    const [devices, setDevices] = useState([]);

    Devices.instance.on('change', () => {
        poolDevices();
    });

    useEffect(() => {
        poolDevices();
    }, []);

    function poolDevices() {
        setDevices(Devices.getList());
    }

    function showPermissionRequest() {
        return getDisconnectedDevices().length > 0;
    }

    function getDisconnectedDevices() {
        return devices.filter((device) => !device.isConnected);
    }

    function handleConnect(device) {
        device.connect().then(() => {
            // ...
        }).catch((err) => {
            console.error(err);
        });
    }

    return <div
        className={`fixed z-50 inset-0 backdrop-blur overflow-auto bg-white/50 dark:bg-neutral-900/50 ${showPermissionRequest() ? '' : 'hidden'}`}>
        <div className="relative grid place-items-center h-screen">
            <div className="w-full max-w-xl mx-auto text-center p-4">
                <h4 className="text-xl sm:text-3xl font-semibold uppercase mb-6">Webserial permission request</h4>

                <div role="alert" className="rounded-md bg-gray-50 dark:bg-neutral-900 border-b-4 border-sky-400 dark:border-sky-600 p-4">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="size-6 text-gray-700 dark:text-blue-100" xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"/>
                            </svg>
                        </div>
                        <div className="ml-3 flex-1 text-left">
                            <p className="text-base font-bold text-gray-800 dark:text-white">Note</p>
                            <p className="text-sm text-gray-700 dark:text-white">
                                To access the serial port, you need to grant permission to the browser.
                            </p>
                        </div>
                    </div>
                </div>

                <p className="my-6 text-base">
                    Here appear the devices missing to work with the application.
                </p>
                <div>
                    <ul className="text-left grid grid-cols-1 gap-2">
                        {getDisconnectedDevices().map((device) => {
                            return <li key={device}>
                                <button className="ws-btn-permission" onClick={() =>
                                    handleConnect(device)
                                }>
                                    {device.typeDevice} #{device.deviceNumber}
                                </button>
                            </li>
                        })}
                    </ul>
                </div>
                <div className="mt-12 mb-2 text-xs text-right">
                    If by some reason the devices are not appearing, please refresh the page.
                </div>
                <div className="text-right">
                    <button className="ws-btn-reload" onClick={() => {
                        location.reload()
                    }}>Refresh
                    </button>
                </div>
            </div>
        </div>
    </div>
}
