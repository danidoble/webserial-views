# Webserial Views Plugin

```shell
npm install @danidoble/webserial-views
```

This will create a new element in dom that will render the views of the webserial.

```javascript
import "@danidoble/webserial-views";
import "@danidoble/webserial-views/dist/webserial-views.css";
```

If you are using react in your project, you can use like this

```javascript
import {BasicSerialViews} from "@danidoble/webserial-views/serial-views";
import "@danidoble/webserial-views/dist/webserial-views.css";

const App = () => {
    return (
        <BasicSerialViews /> {/*This is the component that will render the views*/}
    );
}
```