import { compose, prop } from "ramda";
import path from "path";
import url from "url";

const invoke = (method: string, ...args: any) => (self: any) =>
  self[method].bind(self)(...args);

const convertType = (x: url.Url) => x as Record<"pathname", string>;

export default class FileNameExpert {
  static getFileNameFromUrl = compose(
    decodeURIComponent,
    path.basename,
    prop("pathname"),
    convertType,
    url.parse,
    invoke("toString")
  );

  static getFileFullNameFromUrl = compose(
    decodeURIComponent,
    x =>
      "/" +
      (prop("host")(x) || "") +
      (prop("port")(x) || "") +
      prop("pathname")(x),
    url.parse,
    invoke("toString")
  );
}
