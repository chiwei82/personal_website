// shader/bgShader.js

export const bgVertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const bgFragmentShader = `
uniform vec2 iResolution;
uniform float iTime;
uniform float uStrength;

varying vec2 vUv;

highp float rand(vec2 co) {
  return fract(sin(mod(dot(co.xy, vec2(12.9898, 78.233)), 3.14)) * 43758.5453);
}

float tnoise(vec2 co) {
  vec2 w = co;
  co.y += co.x / 2.0;
  const vec2 s = vec2(1.0, 0.0);
  vec2 p = floor(co);
  if (fract(co.x) < fract(co.y)) p += 0.5;
  return rand(p);
}

void main() {
  vec2 fragCoord = gl_FragCoord.xy;
  vec2 uv = (fragCoord * 2.0 - iResolution.xy) / 40.0;

  float n = tnoise(uv);

  vec4 fragColor = vec4(
    sin(iTime * n * 7.0 + n * 6.28318530718) * 0.5 + 0.5
  ) * 0.3 + 0.5;

  fragColor += sin((uv.x - uv.y) * 30.0) / 2.0;
  fragColor += rand(uv) / 2.0;
  fragColor /= 4.0;

  // ✅ 使用 alpha 透明度控制強度，讓 shader「淡出」到完全透明
  fragColor.a = uStrength;

  gl_FragColor = fragColor;
}
`;
