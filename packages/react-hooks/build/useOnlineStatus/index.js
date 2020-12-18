import { useState, useEffect } from "react";
export default (function () {
    var _a = useState(window.navigator.onLine), isOnline = _a[0], setIsOnline = _a[1];
    useEffect(function () {
        window.addEventListener("online", function () { return setIsOnline(true); });
        window.addEventListener("offline", function () { return setIsOnline(false); });
        return function () {
            window.removeEventListener("online", function () { return setIsOnline(true); });
            window.removeEventListener("offline", function () { return setIsOnline(true); });
        };
    }, []);
    return isOnline;
});
//# sourceMappingURL=index.js.map