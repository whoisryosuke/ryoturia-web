import { useAppStore } from "@/store/app";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Euler } from "three";

const CAMERA_ANGLES = {
  top: {
    position: {
      x: 3.75,
      y: 19.35,
      z: -3.64,
    },
    rotation: {
      x: -1.54,
      y: -3.2,
      z: -0.01,
    },
  },
  three_quarter: {
    position: {
      x: -5.3,
      y: 14.8,
      z: 13,
    },
    rotation: {
      x: -0.78,
      y: -0.33,
      z: -0.32,
    },
  },
  front: {
    position: {
      x: 3.2,
      y: 1,
      z: 5.9,
    },
    rotation: {
      x: -0.08,
      y: -0.05,
      z: -0.004,
    },
  },
};

type Props = {};

const CameraAngles = (props: Props) => {
  const { cameraAngle } = useAppStore();
  const prevAngle = useRef("");

  useFrame(({ camera }) => {
    if (prevAngle.current != cameraAngle) {
      const { x, y, z } = CAMERA_ANGLES[cameraAngle].position;
      const rotation = CAMERA_ANGLES[cameraAngle].rotation;
      camera.position.set(x, y, z);
      camera.rotation.set(rotation.x, rotation.y, rotation.z);
      prevAngle.current = cameraAngle;
    }
  });
  return <></>;
};
export default CameraAngles;
