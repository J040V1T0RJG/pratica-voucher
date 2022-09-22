import voucherRepository from "../../src/repositories/voucherRepository";
import voucherService from "../../src/services/voucherService";
import { conflictError } from "../../src/utils/errorUtils";

describe("Test createVoucher function", () => {
    it("Should return nothing, it means the function ran correctly", async () => {
        jest.spyOn(voucherRepository, "getVoucherByCode").mockImplementation(() => {
            return undefined;
        });
        jest.spyOn(voucherRepository, "createVoucher").mockImplementation(() => {
            return undefined;
        });

        const code = "9237hfceuwaivhvwi";
        const discount = 12;

        const result = await voucherService.createVoucher(code, discount);

        expect(result).toBe(undefined);
    });

    it.todo("Should return error", () => {
        jest.spyOn(voucherRepository, "getVoucherByCode").mockImplementation(() => {
            return {
                xablau: "xablau"
            };
        });
        jest.spyOn(voucherRepository, "createVoucher").mockImplementation(() => {
            return undefined;
        });
        /*
        jest.spyOn().mockImplementation(() => {
            return new Error()
        })
        const code = "9237hfceuwaivhvwi";
        const discount = 12;

        const result = await voucherService.createVoucher(code, discount);
*/
    });
});

describe("Test applyVoucher function", () => {
    it("Deve retornar um objeto", () => {
        jest.spyOn(voucherRepository, "getVoucherByCode").mockImplementation(() => {
            return {
                used: false,
                discount: 22,
                code: "nf9uw839eurndf92rnd9q"
            }
        })

    });
});