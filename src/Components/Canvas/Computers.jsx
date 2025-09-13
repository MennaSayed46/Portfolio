import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";

const Computers = ({ Mobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={6} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={computer.scene}
        scale={Mobile ? 0.45 : 0.75}
        position={Mobile ? [0, -2.6, -1] : [0, -3, -1.5]}
        rotation={Mobile ? [-0.02, -0.4, -0.05] : [0, -0.4, -0.05]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [Mobile, setMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width:500px)");
    setMobile(media.matches);

    const handleChange = (event) => {
      setMobile(event.matches);
    };
    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
      className="z-10 relative"
    >

      <Suspense
        fallback={
          <Html>
            <span style={{ color: "white" }}>Loading...</span>
          </Html>
        }
      >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers Mobile={Mobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
