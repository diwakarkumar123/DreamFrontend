import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';

const createStarSvg = (color, fillOpacity) => {
  return `
    <polygon
      points="50,10 61.8,37.5 92.5,37.5 69.3,56.9 80.1,84.4 50,65.6 19.9,84.4 30.7,56.9 7.5,37.5 38.2,37.5"
      stroke="#FFD700"
      stroke-width="5"
      fill="${color}"
      fill-opacity="${fillOpacity}"
    />
  `;
};

const StarIcon = ({ no_of_star = 3, color = 'gold' }) => {
  const stars = Array.from({ length: 4 }, (v, i) => i).map((i) =>
    createStarSvg(color, i < no_of_star ? 1 : 0)
  );
  const svgXml = `
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="250" viewBox="0 0 400 250">
      <!-- Stars -->
      ${stars.map((star, i) => `<g transform="translate(${i * 70},0)">${star}</g>`).join('')}
      
      <!-- Coin icon -->
      <g transform="translate(150,150)">
        <circle cx="0" cy="0" r="60" fill="#FFD700" stroke="#DAA520" stroke-width="2" />
        <text x="0" y="15" font-family="Arial" font-size="50" fill="#DAA520" text-anchor="middle" dominant-baseline="middle">$</text>
      </g>
    </svg>
  `;

  return <SvgXml xml={svgXml} width={100} height={100} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StarIcon;
