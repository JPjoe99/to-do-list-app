import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Header from ".";

describe("tests for Header", () => {
  it("should display a header element", () => {
    render(<Header />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });
});
