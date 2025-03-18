import { useState, useEffect } from "react";
import { Devices } from "@danidoble/webserial";
import "./permissions.css";

export function Permissions() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const fn = () => {
      poolDevices();
    };
    Devices.instance.on("change", fn);

    poolDevices();

    return () => {
      Devices.instance.off("change", fn);
    };
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
    device
      .connect()
      .then(() => {
        // ...
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div
      className={`ws-fixed ws-z-50 ws-inset-0 ws-backdrop-blur ws-overflow-auto ws-bg-white/50 dark:ws-bg-neutral-900/50 ${showPermissionRequest() ? "" : "ws-hidden"}`}
    >
      <div className="ws-relative ws-grid ws-place-items-center ws-h-screen ws-text-black dark:ws-text-white">
        <div className="ws-w-full ws-max-w-xl ws-mx-auto ws-text-center ws-p-4">
          <h4 className="ws-text-xl sm:ws-text-3xl ws-font-semibold ws-uppercase ws-mb-6">
            Webserial permission request
          </h4>

          <div
            role="alert"
            className="ws-rounded-md ws-bg-gray-50 dark:ws-bg-neutral-900 ws-border-b-4 ws-border-sky-400 dark:ws-border-sky-600 ws-p-4"
          >
            <div className="ws-flex">
              <div className="ws-flex-shrink-0">
                <svg
                  className="ws-size-6 ws-text-gray-700 dark:ws-text-blue-100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              </div>
              <div className="ws-ml-3 ws-flex-1 ws-text-left">
                <p className="ws-text-base ws-font-bold ws-text-gray-800 dark:ws-text-white">
                  Note
                </p>
                <p className="ws-text-sm ws-text-gray-700 dark:ws-text-white">
                  To access the serial port, you need to grant permission to the
                  browser.
                </p>
              </div>
            </div>
          </div>

          <p className="ws-my-6 ws-text-base">
            Here appear the devices missing to work with the application.
          </p>
          <div>
            <ul className="ws-text-left ws-grid ws-grid-cols-1 ws-gap-2">
              {getDisconnectedDevices().map((device) => {
                return (
                  <li key={device}>
                    <button
                      className="ws-btn-permission"
                      onClick={() => handleConnect(device)}
                    >
                      {device.typeDevice} #{device.deviceNumber}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="ws-mt-12 ws-mb-2 ws-text-xs ws-text-right">
            If by some reason the devices are not appearing, please refresh the
            page.
          </div>
          <div className="ws-text-right">
            <button
              className="ws-btn-reload"
              onClick={() => {
                location.reload();
              }}
            >
              Refresh
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
