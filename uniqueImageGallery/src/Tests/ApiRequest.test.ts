// import { ApiRequest } from "../helpers/ApiRequest";


// // Mock the global fetch function
// const mockFetch = jest.fn() as jest.MockedFunction<typeof fetch>;

// beforeEach(() => {
//     // Clear all instances and calls to the mock fetch function
//     mockFetch.mockClear();
// });

// test("ApiRequest: successful POST request", async () => {
//     const url = "https://example.com/api/data";
//     const optionsObj: RequestInit = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ key: "value" }),
//     };

//     await ApiRequest(url, optionsObj);

//     expect(mockFetch).toHaveBeenCalledTimes(1);
//     expect(mockFetch).toHaveBeenCalledWith(url, optionsObj);
// });

// test("ApiRequest: unsuccessful POST request", async () => {
//     (mockFetch as jest.Mock).mockImplementationOnce(async () => {
//         return {
//             ok: false,
//         };
//     });

//     const url = "https://example.com/api/data";
//     const optionsObj: RequestInit = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ key: "value" }),
//     };

//     await ApiRequest(url, optionsObj);

//     expect(mockFetch).toHaveBeenCalledTimes(1);
//     expect(mockFetch).toHaveBeenCalledWith(url, optionsObj);
// });

// test("ApiRequest: POST request error", async () => {
//     (mockFetch as jest.Mock).mockImplementationOnce(async () => {
//         throw new Error("Network Error");
//     });

//     const url = "https://example.com/api/data";
//     const optionsObj: RequestInit = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ key: "value" }),
//     };

//     await ApiRequest(url, optionsObj);

//     expect(mockFetch).toHaveBeenCalledTimes(1);
//     expect(mockFetch).toHaveBeenCalledWith(url, optionsObj);
// });
