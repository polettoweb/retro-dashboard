import lightenColor from "../../src/utils/lightenColor";
import betterContrastColor from "../../src/utils/betterContrastColor";

describe("Utilities", () => {
  it("lighen color by a certain percentage", () => {
    const baseColor = "#000000";
    const percentage = 20;

    const result = lightenColor(baseColor, percentage);
    expect(result).toBe("#333333");
  });

  it("swap text color based on background hue", () => {
    const baseColor = "#000000";

    const result = betterContrastColor(baseColor);
    expect(result).toBe("#ffffff");
  });
});
