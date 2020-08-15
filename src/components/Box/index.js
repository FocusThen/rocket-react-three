import React, { useState } from "react";
import { useSpring, a } from "react-spring/three";

export default function Box() {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  const props = useSpring({
    color: hovered ? "hotpink" : "grey",
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
  });

  return (
    <a.mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={props.scale}
      castShadow
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshPhysicalMaterial attach="material" color={props.color} />
    </a.mesh>
  );
}
