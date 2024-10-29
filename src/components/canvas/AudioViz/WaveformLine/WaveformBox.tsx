import { MeshProps } from "@react-three/fiber";
import { forwardRef, RefObject } from "react";
import { Mesh } from "three";

type Props = Partial<MeshProps> & {
  offset: number;
};

const BOX_WIDTH = 0.1;

const WaveformBox = forwardRef(
  ({ offset, ...props }: Props, ref: RefObject<Mesh>) => {
    console.log("Rendering boxes!");
    return (
      <mesh ref={ref} position={[offset * BOX_WIDTH * 2, 0, 0]} {...props}>
        <boxGeometry args={[BOX_WIDTH, 2, 1]} />
        <meshPhysicalMaterial color={"blue"} />
      </mesh>
    );
  }
);

WaveformBox.displayName = "WaveformBox";
export default WaveformBox;
