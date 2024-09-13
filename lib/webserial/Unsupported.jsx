import {utils} from "webserial";
import './unsupported.css';

export function Unsupported() {
    let isHttps = location.protocol === 'https:';
    const support = utils.supportWebSerial();

    if (support && !isHttps) {
        isHttps = true; // localhost is the only exception
    }

    function showUnsupported() {
        return !isHttps || !support;
    }

    function updateProtocol() {
        location.href = location.href.replace(/^http:/, 'https:');
    }

    return (<>
        <div
            className={`fixed inset-0 backdrop-blur overflow-auto z-[51] p-2 bg-gray-50 dark:bg-neutral-900 border-y-8 border-red-600 dark:border-rose-600 ${showUnsupported() ? '' : 'hidden'}`}>
            <div className="grid place-items-center size-full">
                <div className="w-full max-w-xl">
                    <div
                        className="w-full bg-white dark:bg-neutral-950 border-b-8 border-red-600 dark:border-rose-600 rounded-lg px-4 py-8 text-black dark:text-white">
                        <div className="w-full inline-flex justify-center text-red-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-24 shrink-0 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                            </svg>
                        </div>
                        <div className="text-center text-2xl">
                            {isHttps ?
                                <div className="">
                                    <p>Webserial is not available in this browser.</p>
                                    <p className="mt-6 text-sm">
                                        Please check documentation for more information.
                                    </p>
                                    <p className="mb-6 text-sm">This application will not work.</p>

                                </div> :
                                <div>
                                    <p>Webserial need a secure connection (https)</p>
                                    <p className="mt-2 flex justify-center">
                                        <button className="ws-btn-link" onClick={() => {
                                            updateProtocol()
                                        }}>
                                            Update connection
                                        </button>

                                    </p>
                                    <p className="mt-6 text-base">
                                        Otherwise this application will not work.
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}