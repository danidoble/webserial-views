import {Permissions} from "./webserial/Permissions.jsx";
import {Unsupported} from "./webserial/Unsupported.jsx";
import {Events} from "./webserial/Events.jsx";

export default function App() {
    return (<>
        <Permissions/>
        <Unsupported/>
        <Events/>
    </>);
}