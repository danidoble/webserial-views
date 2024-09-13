import {useEffect} from "react";
import {Permissions} from "./webserial/Permissions.jsx";
import {Unsupported} from "./webserial/Unsupported.jsx";
import {Events} from "./webserial/Events.jsx";
import {utils} from "webserial";

export default function App() {
    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            //document.documentElement.classList.add('dark')
            document.documentElement.setAttribute('data-theme', 'sunset');
        } else {
            //document.documentElement.classList.remove('dark')
            document.documentElement.setAttribute('data-theme', 'emerald');
        }
    }, []);

    let isHttps = location.protocol === 'https:';
    const support = utils.supportWebSerial();

    if (support && !isHttps) {
        isHttps = true; // localhost is the only exception
    }

    function showUnsupported() {
        return !isHttps || !support;
    }

    return (<>
        <Permissions/>
        {(showUnsupported() ? <Unsupported/> : null)}
        <Events/>
    </>);
}