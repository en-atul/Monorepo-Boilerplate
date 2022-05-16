import base from "../../jest.config.base";
import * as packageJson from "./package.json";

export default {
  ...base,
  name: packageJson.name,
  displayName: packageJson.name
};
