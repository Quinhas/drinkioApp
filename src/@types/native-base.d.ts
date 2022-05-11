import "native-base";
import { theme } from "../theme";

type MyThemeType = typeof theme;

declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}
