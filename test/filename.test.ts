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

  it("keeps encode", async () => {
    const url =
      "http://libre-office.oss-cn-shanghai.aliyuncs.com/10.28%20T%26D%20%E7%94%B0%E6%9D%B0%20WeeklyReport.docx";
    expect(FileNameExpert.getFileNameFromUrl(url)).toEqual(
      "10.28 T&D 田杰 WeeklyReport.docx"
    );
  });

  it("get full path of a file from file url", () => {
    const url =
      "http://libre-office.oss-cn-shanghai.aliyuncs.com/jeff/tian/10.28%20T%26D%20%E7%94%B0%E6%9D%B0%20WeeklyReport.docx";
    expect(FileNameExpert.getFileFullNameFromUrl(url)).toEqual(
      "/libre-office.oss-cn-shanghai.aliyuncs.com/jeff/tian/10.28 T&D 田杰 WeeklyReport.docx"
    );
  });
});
