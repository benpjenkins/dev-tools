import { useState, useEffect } from "react";
import _ from "lodash";
export default (function () {
    var _a = useState(window.navigator.onLine), isOnline = _a[0], setIsOnline = _a[1];
    useEffect(function () {
        window.addEventListener("online", function () { return _.debounce(setIsOnline(true)); });
        window.addEventListener("offline", function () { return _.debounce(setIsOnline(false)); });
        return function () {
            window.removeEventListener("online", function () { return _.debounce(setIsOnline(true)); });
            window.removeEventListener("offline", function () {
                return _.debounce(setIsOnline(true));
            });
        };
    }, []);
    return isOnline;
});
//# sourceMappingURL=useOnlineStatus.js.map