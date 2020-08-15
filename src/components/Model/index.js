import React from "react";
import { draco } from "drei";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Model({ url, scale, position }) {
  const { nodes, materials } = useLoader(GLTFLoader, url, draco());
  console.log(nodes);
  return (
    <group rotation={[-Math.PI / 2, 0, 0]} position={position} scale={scale}>
      <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.planet001.geometry}
          material={materials.scene}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.planet002.geometry}
          material={materials.scene}
        />
      </group>
    </group>
  );
}
