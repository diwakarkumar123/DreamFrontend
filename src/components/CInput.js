import { StyleSheet, View, TextInput } from 'react-native';
import React, {forwardRef} from 'react';
import { BORDER, COLOR, SPACING } from '../configs/styles';
import Icon from './Icon';

const CInput = forwardRef((props, ref) => {
  const {
    value,
    placeholder,
    onChangeText,
    iconLeft,
    iconRight,
    onPressIconRight,
    iconColor = COLOR.BLACK,
    sizeIcon = 24,
    keyboardType = 'default',
    style,
    onFocus,
    secureTextEntry = false,
    returnKeyType,
    onSubmitEditing,
    multiline = false,
    placeholderTextColor = '#020202',
    textAlignVertical = 'center',
  } = props;

  return (
    <View style={[styles.container, style]}>
      {iconLeft && (
        <Icon
          source={iconLeft}
          tintColor={iconColor}
          width={sizeIcon}
          height={sizeIcon}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        onFocus={onFocus}
        secureTextEntry={secureTextEntry}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        multiline={multiline}
        textAlignVertical={textAlignVertical}
        ref={ref} // Forward the ref to the TextInput
      />
      {iconRight && (
        <Icon
          source={iconRight}
          tintColor={iconColor}
          width={sizeIcon}
          height={sizeIcon}
          onPress={onPressIconRight}
        />
      )}
    </View>
  );
});

export default CInput;

const styles = StyleSheet.create({
  container: {
    padding: SPACING.S1,
    backgroundColor: COLOR.setOpacity(COLOR.GRAY, 0.15),
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: BORDER.SMALL,
    paddingHorizontal: SPACING.S2,
  },
  input: {
    marginLeft: SPACING.S1,
    width: '100%',
    height: '100%',
    flex: 1,
    padding: SPACING.S2,
    color: '#020202',
  },
});
