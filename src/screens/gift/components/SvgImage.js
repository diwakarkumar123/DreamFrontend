import React from 'react';
import { Dimensions, View } from 'react-native';
import { Svg, Path, Text } from 'react-native-svg';

const { width, height } = Dimensions.get('window')



const width1 = width / 3;
const path = `M0.5 0.5H${width1 - 1}V0.5Z M${width1 - 1} 0.5L${width1 - 5.399} 4.66305C${width1 - 8.647
  } 7.60156 ${width1 - 10.5} 11.777 ${width1 - 10.5} 16.1569V31C${width1 - 10.5
  } 33.4853 ${width1 - 12.515} 35.5 ${width1 - 15} 35.5H0.5V0.5Z`;

const MySVGComponent = ({ text }) => {
  const svgWidth = width / 3;
  const svgHeight = 36;
  // const text = 'S';
  const textFontSize = 18;


  const getTextPositionX = () => {
    const textWidth = text.length * textFontSize;
    return (svgWidth - textWidth) / 2;
  };

  const getTextPositionY = () => {
    const textHeight = textFontSize;
    return (svgHeight - textHeight) / 0.9;
  };

  return (
    <View>
      <Svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`} fill="none">
        <Path d={path} fill="#676767" stroke="white" />
        <Text
          x={getTextPositionX()}
          y={getTextPositionY()}
          fill="white"
          fontSize={textFontSize}
          textAnchor="start"
          alignmentBaseline="middle"
          fontWeight={600}
        >
          {text}
        </Text>
      </Svg>
    </View>
  );
};

export default MySVGComponent;
