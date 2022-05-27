import { Factory, IScrollViewProps, ScrollView } from "native-base";
import React from "react";
import { Tabs } from "../Tabs";

export function CustomView({
  children,
  showTabs = false,
  ...rest
}: { children: JSX.Element[]; showTabs?: boolean } & IScrollViewProps) {
  const CustomView = Factory(ScrollView, {
    baseStyle: {
      bg: "muted.100",
      minH: "calc(100vh - 3.5rem)",
      maxH: "calc(100vh - 3.5rem)",
    },
  });
  return (
    <>
      <CustomView {...rest}>{children}</CustomView>
      {showTabs && <Tabs />}
    </>
  );
}
