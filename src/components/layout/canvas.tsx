import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { A11yAnnouncer } from "@react-three/a11y";
import { OrbitControls, Preload, Stats } from "@react-three/drei";

const Controls = () => {
  const control = useRef(null);
  return <OrbitControls ref={control} />;
};
const CanvasWrapper = ({ children }) => {
  return (
    <>
      <Canvas
        // Is this deprecated or typed wrong? Ignoring for now.
        // @ts-ignore
        mode="concurrent"
        camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }}
        shadows
        dpr={[1, 1.5]}
        style={{
          position: "absolute",
          top: 0,
        }}
      >
        <Stats />
        <Controls />
        <Preload all />
        {children}
      </Canvas>
      <A11yAnnouncer />
    </>
  );
};

export default CanvasWrapper;
