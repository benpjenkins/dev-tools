import { renderHook } from "@testing-library/react-hooks";
import useOnlineStatus from "../useOnlineStatus";
describe("useOnlineStatus", function () {
    it("should return true by default", function () {
        var result = renderHook(function () { return useOnlineStatus(); }).result;
        expect(result.current).toBe(true);
    });
});
//# sourceMappingURL=useOnlineStatus.test.js.map