import {useEffect} from "react";
import {Permissions} from "./webserial/Permissions.jsx";
import {Unsupported} from "./webserial/Unsupported.jsx";
import {Events} from "./webserial/Events.jsx";
import {utils} from "@danidoble/webserial";
import PropTypes from "prop-types";

App.propTypes = {
    theme: PropTypes.oneOf(['system', 'dark', 'light'])
}

export default function App({theme = "system"} = {theme: "system"}) {
    useEffect(() => {
        if (theme === "system") {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        } else if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else if (theme === 'light') {
            document.documentElement.classList.remove('dark')
        }
    }, [theme]);

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