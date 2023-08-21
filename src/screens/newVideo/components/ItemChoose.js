import { StyleSheet, View, Switch } from 'react-native';
import React, { useState } from 'react';
import { BORDER, COLOR, SPACING, TEXT } from '../../../configs/styles';
import { Icon, CText } from '../../../components';

const ItemChoose = ({
  iconLeft,
  name,
  iconRight,
  type,
  onChange,
  initValue,
  onPress,
  value
}) => {
  const [isEnabled, setIsEnabled] = useState(initValue);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    if (onChange) onChange(!isEnabled);
  };
  return (
    <View style={styles.container}>
      <Icon source={iconLeft} width={24} height={24} tintColor={COLOR.GRAY} />
      <View style={styles.content}>
        <CText
          text={TEXT.REGULAR}
          fontSize={15}
          color={COLOR.BLACK}
          numberOfLines={1}>
          {name}
        </CText>
        {type && <CText marginRight={SPACING.S2}>{type}</CText>}
        {iconRight ? (
          <Icon source={iconRight} tintColor={COLOR.GRAY} onPress={onPress} />
        ) : (
          <Switch
            trackColor={{ false: '#767577', true: 'red' }}
            thumbColor={isEnabled ? 'red' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        )}
      </View>
    </View>
  );
};

export default ItemChoose;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: SPACING.S4,
    alignItems: 'center',
  },
  iconHashTag: {
    width: 30,
    height: 30,
    borderRadius: BORDER.PILL,
    borderWidth: 2,
    borderColor: COLOR.LIGHT_GRAY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    marginLeft: SPACING.S2,
    flexGrow: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
