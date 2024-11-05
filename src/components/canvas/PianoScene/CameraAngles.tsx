import { useAppStore } from "@/store/app";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Euler } from "three";

const CAMERA_ANGLES = {
  top: {
    position: {
      x: 3.9,
      y: 18.35,
      z: -2.5,
    },
    rotation: {
      x: -1.5,
      y: 0,
      z: 0,
    },
  },
  three_quarter: {
    position: {
      x: -1.2,
      y: 10,
      z: 6.6,
    },
    rotation: {
      x: -0.9,
      y: -0.4,
      z: -0.48,
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
    // console.log("camera", camera.position, camera.rotation);
    if (prevAngle.current != cameraAngle) {
      const { x, y, z } = CAMERA_ANGLES[cameraAngle].position;
      const rotation = CAMERA_ANGLES[cameraAngle].rotation;
      camera.position.set(x, y, z);
      camera.rotation.set(rotation.x, rotation.y, rotation.z, "XYZ");
      prevAngle.current = cameraAngle;
    }
  });
  return <></>;
};
export default CameraAngles;
