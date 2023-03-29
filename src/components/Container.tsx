import { View,SafeAreaView } from 'react-native';
import React from 'react';
import { ContainerType } from '../utils/interfaceStyles';

const Container = React.forwardRef(
  (props: ContainerType, ref: React.LegacyRef<View>) => {
    const { children, ...styles } = props;

    return (
   
      <SafeAreaView ref={ref} style={styles}>
        {children}
      </SafeAreaView>
  
     
    );
  },
);

export default Container;
