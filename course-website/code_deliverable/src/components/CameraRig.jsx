import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { easing } from 'maath'

export function CameraRig({ target }) {
    const targets = {
        pc: {
            position: new THREE.Vector3(-0.55, 1.4, -3.5),
            lookAt: new THREE.Vector3(-0.55, 1.4, -4.9)
        },
        phone: {
            position: new THREE.Vector3(-0.7, 1.2, -4.5),
            lookAt: new THREE.Vector3(-0.72, 0.9, -5.25)
        },
        papers: {
            position: new THREE.Vector3(-1, 1.3, -4.8),
            lookAt: new THREE.Vector3(-1.01, 0.95, -5.54)
        },
        default: {
            position: new THREE.Vector3(0, 2, 5),
            lookAt: new THREE.Vector3(0, 0, 0)
        }
    }

    const current = targets[target] || targets.default

    useFrame((state, delta) => {
        // Smoothly interpolate camera position
        easing.damp3(state.camera.position, current.position, 0.35, delta)

        // Smoothly interpolate camera lookAt
        // We create a temporary target point to damp towards
        const targetVec = current.lookAt.clone()
        state.camera.lookAt(targetVec)
    })

    return null
}
