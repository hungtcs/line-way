import Color from "color";

export const size = 50;
export const gapSize = 8;
export const fillColor = '#208C85';
export const scalingRate = 0.74;
export const scaledSize = size * scalingRate;
export const cornerRadius = 8;
export const scaledFillColor = Color('#208C85').lighten(0.25).hex();
export const scaledCornerRadius = scaledSize / 2;
export const tweenDuration = 0.05;
