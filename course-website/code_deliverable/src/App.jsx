import React, { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows, GizmoHelper, GizmoViewport } from '@react-three/drei'
import { Desk } from './components/Desk'
import { CameraRig } from './components/CameraRig'
import { SceneInspector } from './components/SceneInspector'
import './index.css'

const INITIAL_CONFIG = {
  showGizmos: true,
  monitor: {
    position: [-0.546, 1.48, -4.84],
    rotation: [0, 0, 0],
    distanceFactor: 1.2
  },
  phone: {
    position: [-0.721, 0.925, -5.252],
    rotation: [-Math.PI / 2, 0, 1.096],
    distanceFactor: 0.15
  },
  camera: {
    initial: [5, 2, 5], // Adjusted for 90deg turn
    pc: {
      position: [1.4, 1.4, -3.5],
      lookAt: [-4.9, 1.4, -0.55]
    },
    phone: {
      position: [1.2, 1.2, -4.5],
      lookAt: [-5.25, 0.9, -0.72]
    },
    papers: {
      position: [1.3, 1.3, -4.8],
      lookAt: [-5.54, 0.95, -1.01]
    }
  }
}

export default function App() {
  const [target, setTarget] = useState(null)
  const [config, setConfig] = useState(INITIAL_CONFIG)

  return (
    <div className="w-full h-full bg-[#050505] overflow-hidden">
      <SceneInspector config={config} setConfig={setConfig} />

      <Canvas shadows dpr={[1, 2]} bg="#050505">
        <CameraRig target={target} config={config.camera} />

        {/* Helper Gizmos */}
        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewport axisColors={['#9d4b4b', '#2f7f4f', '#3b5b9d']} labelColor="white" />
        </GizmoHelper>

        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <pointLight position={[-10, 5, -5]} intensity={0.5} />
        <Environment preset="city" />

        <Suspense fallback={null}>
          <group position={[0, -0.5, 0]} rotation={[0, Math.PI / 2, 0]}>
            <Desk onFocus={setTarget} config={config} />
            <ContactShadows
              opacity={0.4}
              scale={20}
              blur={2.4}
              far={10}
              resolution={256}
              color="#000000"
            />
          </group>
        </Suspense>

        <OrbitControls
          makeDefault
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.1}
          enablePan={false}
          autoRotate={!target}
          autoRotateSpeed={0.5}
        />
      </Canvas>

      {/* UI Overlay */}
      <div className="absolute top-8 left-8 z-10 pointer-events-none">
        <h1 className="text-white text-5xl font-black tracking-tighter uppercase mb-2">Vibe Coding Ethics</h1>
        <p className="text-white/40 text-sm font-mono tracking-widest uppercase">Designing with Character • Cornell Tech 2026</p>
      </div>

      {target && (
        <button
          onClick={() => setTarget(null)}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 px-8 py-3 bg-white text-black text-sm font-bold tracking-widest uppercase rounded-full hover:scale-105 active:scale-95 transition-transform"
        >
          Back to Desktop
        </button>
      )}
    </div>
  )
}
