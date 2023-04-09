import React from "react";
import { render } from "@testing-library/react";
import Gallery from "../components/Gallery";
import { describe } from "node:test";

// Mock MyContext with desired values for testing
jest.mock("../context/Context", () => ({
  MyContext: {
    Consumer: ({ children }: { children: (value: any) => React.ReactNode }) =>
      children({
        images: [
          {
            email: "email1@example.com",
            imageFormat: "jpg",
            imageType: "landscape",
          },
        ],
      }),
  },
}));

describe("Gallery", () => {
  it("renders images from context", () => {
    const { getByTestId } = render(<Gallery />);
    const galleryElement = getByTestId("gallery");
    expect(galleryElement.childElementCount).toBe(1); // Assumes only one image is rendered
    // You can add more assertions here to check the rendered content, props, etc.
  });
});
