import {useState, useEffect} from "react";
import {Devices} from "webserial";

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
        const show = getDisconnectedDevices().length > 0;
        const prefix = import.meta.env.VITE_PREFIX;
        const el = document.getElementById(`webserial-${prefix}`);
        if (show) {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }

        return show
    }

    function getDisconnectedDevices() {
        return devices.filter((device) => !device.isConnected);
    }

    function handleConnect(device) {
        device.connect().then(() => {
            console.log('connected');
        }).catch((err) => {
            console.error(err);
        });
    }

    return <>
        <div className={`grid place-items-center h-screen ${showPermissionRequest() ? '' : 'hidden'}`}>
            <div className="w-full max-w-xl mx-auto text-center p-4">
                <h4 className="text-xl sm:text-3xl font-semibold uppercase mb-6">Webserial permission request</h4>

                <div role="alert" className="mt-2 alert shadow-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="stroke-info h-6 w-6 shrink-0">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                        <h3 className="font-bold">Note</h3>
                        <div className="text-xs">
                            To access the serial port, you need to grant permission to the browser.
                        </div>
                    </div>
                </div>

                <p className="my-6 text-sm">
                    Here appear the devices missing to work with the application.
                </p>
                <div>
                    <ul className="text-left grid grid-cols-1 gap-2">
                        {getDisconnectedDevices().map((device) => {
                            return <li key={device}>
                                <button className="btn btn-outline btn-neutral capitalize w-full" onClick={() =>
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
                    <button className="btn btn-sm btn-outline btn-primary" onClick={() => {
                        location.reload()
                    }}>Refresh
                    </button>
                </div>
            </div>
        </div>
    </>
}
