import { View,  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { ContainerType } from '../utils/interfaceStyles';

const Container = React.forwardRef(
  (props: ContainerType, ref: React.LegacyRef<View>) => {
    const { children, ...styles } = props;

    return (

      <View ref={ref} style={styles}>
        {children}
      </View>


    );
  },
);

export default Container;
