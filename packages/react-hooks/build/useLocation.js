import { useEffect, useState } from "react";
export default (function () {
    var _a = useState(null), location = _a[0], setLocation = _a[1];
    var _b = useState(false), error = _b[0], setError = _b[1];
    var handleSuccess = function (position) {
        setLocation(position);
    };
    var handleError = function () {
        setError(true);
    };
    useEffect(function () {
        if (!navigator.geolocation) {
            setError(true);
        }
        else {
            navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
        }
    });
    return { location: location, error: error };
});
//# sourceMappingURL=useLocation.js.map