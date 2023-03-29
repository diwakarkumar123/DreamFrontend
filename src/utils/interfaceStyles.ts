import React from 'react';
import {
  FlexAlignType,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TextStyle,
  ViewProps,
  ViewStyle,
} from 'react-native';

type JustifyContentType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | undefined;

export interface FlexCustomType {
  children?: React.ReactNode;
  justifyContent?: JustifyContentType | undefined;
  alignItems?: FlexAlignType | undefined;
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | undefined;
  reverse: boolean;
}

export interface PaddingCustomType {
  children?: React.ReactNode;
  padding?: number | string | undefined;
  paddingBottom?: number | string | undefined;
  paddingEnd?: number | string | undefined;
  paddingHorizontal?: number | string | undefined;
  paddingLeft?: number | string | undefined;
  paddingRight?: number | string | undefined;
  paddingStart?: number | string | undefined;
  paddingTop?: number | string | undefined;
  paddingVertical?: number | string | undefined;
}

export interface ContainerType extends ViewStyle, ViewProps {
  children?: React.ReactNode;

}

export interface IconCustomType extends ImageStyle {
  children?: React.ReactNode;
  source: ImageSourcePropType;
  onPress?: any;
  style?: StyleProp<ImageStyle>;
  activeOpacity?: number | undefined;
}

export interface TextCustomType extends TextStyle {
  children?: React.ReactNode;
  onPress?: any;
  numberOfLines?: number | undefined;
  text?: any;
  style?: StyleProp<TextStyle>;
}
//TextStyle
