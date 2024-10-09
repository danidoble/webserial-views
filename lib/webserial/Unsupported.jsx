import {utils} from "@danidoble/webserial";
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
            className={`ws-fixed ws-inset-0 ws-backdrop-blur ws-overflow-auto ws-z-[51] ws-p-2 ws-bg-gray-50 dark:ws-bg-neutral-900 ws-border-y-8 ws-border-red-600 dark:ws-border-rose-600 ${showUnsupported() ? '' : 'ws-hidden'}`}>
            <div className="ws-grid ws-place-items-center ws-size-full">
                <div className="ws-w-full ws-max-w-xl">
                    <div
                        className="ws-w-full ws-bg-white dark:ws-bg-neutral-950 ws-border-b-8 ws-border-red-600 dark:ws-border-rose-600 ws-rounded-lg ws-px-4 ws-py-8 ws-text-black dark:ws-text-white">
                        <div className="ws-w-full ws-inline-flex ws-justify-center ws-text-red-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ws-size-24 ws-shrink-0 ws-stroke-current"
                                fill="none"
                                viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                            </svg>
                        </div>
                        <div className="ws-text-center ws-text-2xl">
                            {isHttps ?
                                <div className="">
                                    <p>Webserial is not available in this browser.</p>
                                    <p className="ws-mt-6 ws-text-sm">
                                        Please check documentation for more information.
                                    </p>
                                    <p className="ws-mb-6 ws-text-sm">This application will not work.</p>

                                </div> :
                                <div>
                                    <p>Webserial need a secure connection (https)</p>
                                    <p className="ws-mt-2 ws-flex ws-justify-center">
                                        <button className="ws-btn-link" onClick={() => {
                                            updateProtocol()
                                        }}>
                                            Update connection
                                        </button>

                                    </p>
                                    <p className="ws-mt-6 ws-text-base">
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