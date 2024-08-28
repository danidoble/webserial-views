import {utils} from "webserial";

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
            className={`fixed inset-0 backdrop-blur overflow-auto z-10 p-2 bg-rose-700/10 ${showUnsupported() ? '' : 'hidden'}`}>
            <div className="grid place-items-center size-full">
                <div className="w-full max-w-xl">
                    <div className="w-full bg-rose-800 rounded-lg px-4 py-8 text-white">
                        <div className="w-full inline-flex justify-center">
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
                                    <p className="mb-6 text-sm">This aplication will not work.</p>

                                </div> :
                                <div>
                                    <p>Webserial need a secure connection (https)</p>
                                    <p className="inline-flex justify-center items-center mt-2">
                                        &rarr;
                                        <button className="btn btn-sm btn-ghost text-xl" onClick={() => {
                                            updateProtocol()
                                        }}>Update connection
                                        </button>
                                        &larr;
                                    </p>
                                    <p className="mt-6 text-base">
                                        Otherwise this aplication will not work.
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