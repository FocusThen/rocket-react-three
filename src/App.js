import React, { Suspense } from "react";
import "./App.css";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei";
import Model from "./components/Model";

function App() {
  return (
    <div className="App">
      <div className="bg" />
      <Canvas shadowMap camera={{ position: [0, 0, 5] }}>
        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          enableDamping
          dampingFactor={0.5}
          rotateSpeed={1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.75} />
        <pointLight intensity={1} position={[-10, -25, -10]} />
        <spotLight
          castShadow
          intensity={2.25}
          angle={0.2}
          penumbra={1}
          position={[25, 25, 25]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
        />
        <fog attach="fog" args={["#cc7b32", 16, 20]} />
        <Suspense fallback={null}>
          <Model
            url="/scene-draco.gltf"
            scale={[1, 1, 1]}
            position={[0, -1, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
