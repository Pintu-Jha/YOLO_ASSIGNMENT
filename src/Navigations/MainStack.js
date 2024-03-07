import React from 'react';
import navigationString from './navigationString';
import TabRoutes from './TabRoutes';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationString.TAB_ROUTES}
        component={TabRoutes}
        options={{headerShown: false}}
      />
    </>
  );
}
