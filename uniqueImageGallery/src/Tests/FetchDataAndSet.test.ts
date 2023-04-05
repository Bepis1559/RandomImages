import { describe } from "node:test";
import { fetchDataAndSet } from "../helpers/FetchDataAndSet";

// Mock the fetch function globally
const mockFetch = jest.fn() as jest.MockedFunction<typeof fetch>;
mockFetch.mockImplementation(
  async (): Promise<any> => ({
    json: async () => [
      { id: 1, url: "https://example.com/image1.jpg" },
      { id: 2, url: "https://example.com/image2.jpg" },
    ],
  }),
);

(global.fetch as any) = mockFetch;

describe("fetchDataAndSet", () => {
  beforeEach(() => {
    mockFetch.mockClear();
  });

  it("fetches and sets the images state correctly", async () => {
    const setFunction = jest.fn();
    const URL = "http://localhost:5000/users";
    await fetchDataAndSet(setFunction, URL);

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(URL);

    expect(setFunction).toHaveBeenCalledTimes(1);
    expect(setFunction).toHaveBeenCalledWith([
      { id: 1, url: "https://example.com/image1.jpg" },
      { id: 2, url: "https://example.com/image2.jpg" },
    ]);
  });
});
