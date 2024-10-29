uniform sampler2D bottomTextTexture;
uniform sampler2D marqueeTextTexture;
uniform float time;
uniform vec3 color;
varying vec2 vUv;
#pragma glslify: random = require(glsl-random)

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

void main() {

  float uvSpeed = 0.5; 

  float textUvAnim = map(sin(time * uvSpeed), 0.0, 1.0, 0.0, 0.5);
  
  vec4 bottomText = texture2D(bottomTextTexture, vUv);
  vec2 marqueeUv = vec2(vUv.x * 0.5 - textUvAnim, vUv.y);
  vec4 marqueeText = texture2D(marqueeTextTexture, marqueeUv); 

  float speed = 3.0; 
  vec3 animatedColor = 0.5 + 0.3 * sin(vUv.xyy + time * speed);
  vec4 adjustedAnimatedColor = vec4(animatedColor + color - 0.5, 1.0);
  // Bottom text mixing with color
  vec4 combinedColor = mix(adjustedAnimatedColor, bottomText, pow(bottomText.a, 1.4));
  // Top text
  combinedColor = mix(combinedColor, marqueeText, pow(marqueeText.a, 1.4));
  gl_FragColor.rgba = combinedColor;
  // gl_FragColor.rgba = bottomText;
  // gl_FragColor.rgba = vec4(adjustedAnimatedColor + color, 1.0);
  // gl_FragColor.rgba = vec4(vec3(0,0,1), 1.);
}
