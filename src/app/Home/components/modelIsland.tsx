import { useFBX } from "@react-three/drei";

export function Model() {
  const fbx = useFBX("./model.fbx");

  return (
    <primitive object={fbx}>
      <mesh>
        <ambientLight intensity={0.5} />
        <directionalLight />
        <meshStandardMaterial />
      </mesh>
    </primitive>
  );
}
