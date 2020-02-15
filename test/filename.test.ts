import FileNameExpert from "../src";

describe("gets filename", () => {
  it("gets filename from url", async () => {
    const url =
      "https://github.com/v2ray/v2ray-core/releases/download/v4.22.1/v2ray-windows-64.zip";

    expect(FileNameExpert.getFileNameFromUrl(url)).toEqual(
      "v2ray-windows-64.zip"
    );
  });

  it("returns empty if not a file url", async () => {
    const url = "https://get.okteto.com";

    expect(FileNameExpert.getFileNameFromUrl(url)).toEqual("");
  });
});
