import { useEffect } from "react";
export default (function (type, handler) {
    useEffect(function () {
        window.addEventListener(type, handler);
        return function () {
            window.removeEventListener(type, handler);
        };
    });
});
//# sourceMappingURL=index.js.map