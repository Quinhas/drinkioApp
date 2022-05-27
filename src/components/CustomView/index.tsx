import {
  Factory,
  IScrollViewProps,
  ScrollView,
  useColorModeValue
} from 'native-base';
import React from 'react';
import { Tabs } from '../Tabs';

export function CustomView({
  children,
  showTabs = false,
  ...rest
}: { children: JSX.Element[]; showTabs?: boolean } & IScrollViewProps) {
  const CustomViewFactory = Factory(ScrollView, {
    baseStyle: {
      bg: useColorModeValue('gray.50', 'gray.900'),
      minH: showTabs ? 'calc(100vh - 3.5rem)' : '100vh',
      maxH: showTabs ? 'calc(100vh - 3.5rem)' : '100vh',
    },
  });
  return (
    <>
      <CustomViewFactory {...rest}>{children}</CustomViewFactory>
      {showTabs && <Tabs />}
    </>
  );
}
