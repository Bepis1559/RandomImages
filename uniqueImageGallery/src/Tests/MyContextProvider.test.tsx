import { fetchData } from "../context/Context";

// Mock the fetch function globally

global.fetch = jest.fn(() => {});
