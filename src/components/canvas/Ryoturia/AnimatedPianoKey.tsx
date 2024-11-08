import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useEffect, useRef } from "react";
import { Color, Mesh, MeshPhysicalMaterial } from "three";
import { lerp } from "three/src/math/MathUtils";

const ANIMATION_TIME_ROTATION = 0.1; // seconds
const ANIMATION_SPEED_COLOR = 4; // seconds
// Rotation in Blender is 3 euler which = 3 out of 360
// ThreeJS uses PI-based units, so it'd be `x / Math.PI * 2`
// The full proportional calculation: `(3 * (Math.PI * 2)) / 360 = x`
const WHITE_KEY_ROTATION = 0.05235987755;
const DRUM_PAD_PRESS_DISTANCE = 0.08;
const PRESSED_EMISSIVE_COLOR = new Color("#4287f5");
const AnimatedPianoKey = ({
  pressed,
  black = false,
  drumpad = false,
  note = "C4",
  setInput,
  whiteKeyRotation = WHITE_KEY_ROTATION,
  ...props
}) => {
  let keyColor = black ? [0, 0, 0] : [0.8, 0.8, 0.8];
  if (drumpad) keyColor = [0.8, 0.8, 0.8];
  const colorDelta = useRef(0);
  const meshRef = useRef<Mesh>();
  const originalPositionY = useRef<number>(null);
  const inputRef = useRef(null);
  useFrame(({}, delta) => {
    if (meshRef.current) {
      if (drumpad && originalPositionY.current == null) {
        originalPositionY.current = meshRef.current.position.y;
      }
      // Animate the keys up or down when pressed
      // We use a `easing()` method to "tween" between 2 rotational values
      if (drumpad) {
        easing.damp(
          meshRef.current.position,
          "y",
          pressed
            ? originalPositionY.current - DRUM_PAD_PRESS_DISTANCE
            : originalPositionY.current,
          ANIMATION_TIME_ROTATION,
          delta
        );
      } else {
        easing.damp(
          meshRef.current.rotation,
          "x",
          pressed ? whiteKeyRotation : 0,
          ANIMATION_TIME_ROTATION,
          delta
        );
      }

      // Change color (we go from OG key color to blue - it helps glow pop more)
      // We "tween" between 2 colors, the original color (stored above) and a "pressed" color (blue)
      if (pressed) {
        colorDelta.current += delta;
      } else {
        colorDelta.current = Math.max(colorDelta.current - delta, 0);
      }
      const material = meshRef.current.material as MeshPhysicalMaterial;
      material.color.r = lerp(
        keyColor[0],
        0,
        Math.min(colorDelta.current * ANIMATION_SPEED_COLOR, 1)
      );
      material.color.g = lerp(
        keyColor[1],
        0,
        Math.min(colorDelta.current * ANIMATION_SPEED_COLOR, 1)
      );
      material.color.b = lerp(
        keyColor[2],
        1,
        Math.min(colorDelta.current * ANIMATION_SPEED_COLOR, 1)
      );

      // Change Emission (glow)
      material.emissive = PRESSED_EMISSIVE_COLOR;
      material.emissiveIntensity = lerp(
        0,
        3,
        Math.min(colorDelta.current * ANIMATION_SPEED_COLOR, 1)
      );

      // Doesn't work. It animates fine - but it doesn't retain the final state
      // and it reverts immediately back to original color
      // (ruining the "pressed" effect if held longer than the animation)
      // easing.dampC(
      //   meshRef.current.material.color,
      //   pressed ? [0, 0, 1] : keyColor,
      //   ANIMATION_TIME,
      //   delta
      // );
    }
  });

  // Sync clicks with input store to play music
  const handleKeyPress = () => {
    setInput(note, true);

    // Since we don't know when user stops clicking
    inputRef.current = window.setTimeout(() => setInput(note, false), 420);
  };
  // Clear any timers when exiting component
  useEffect(() => {
    return () => {
      if (inputRef.current) clearTimeout(inputRef.current);
    };
  }, []);

  return <mesh ref={meshRef} onClick={handleKeyPress} {...props} />;
};

export default AnimatedPianoKey;
