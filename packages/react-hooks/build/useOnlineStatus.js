import { useState, useEffect } from "react";
export default (function () {
    var _a = useState(window.navigator.onLine), online = _a[0], setOnline = _a[1];
    useEffect(function () {
        var setFromEvent = function (status) { return setOnline(status); };
        window.addEventListener("online", function () { return setFromEvent(true); });
        window.addEventListener("offline", function () { return setFromEvent(false); });
        return function () {
            window.removeEventListener("online", function () { return setFromEvent(true); });
            window.removeEventListener("offline", function () { return setFromEvent(false); });
        };
    }, []);
    return online;
});
//# sourceMappingURL=useOnlineStatus.js.map