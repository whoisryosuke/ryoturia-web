  uniform float time;
  uniform vec3 color;
  varying vec2 vUv;
  #pragma glslify: random = require(glsl-random)

  void main() {
    float speed = 3.0; 
    vec3 animatedColor = 0.5 + 0.3 * sin(vUv.xyy + time * speed);
    vec3 adjustedAnimatedColor = animatedColor - 0.5;
    gl_FragColor.rgba = vec4(adjustedAnimatedColor + color, 1.0);
    // gl_FragColor.rgba = vec4(vec3(0,0,1), 1.);
  }
