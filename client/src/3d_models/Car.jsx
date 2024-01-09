import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function CarModel(props) {
  const { nodes, materials } = useGLTF('/car-transformed.glb')
  return (
    <group {...props} dispose={null} position={[0, -1.5, 0]}>
      <mesh geometry={nodes.body_car_body_0.geometry} material={materials.PaletteMaterial001} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.front_bumper_carbon_fiber_0.geometry} material={materials.carbon_fiber} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Plane008_window_0.geometry} material={materials.PaletteMaterial002} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.headlight_glass_headlight_glass_0.geometry} material={materials.headlight_glass} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.front_right_wheel_wheel_0.geometry} material={materials.wheel} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.intercooler_intercooler_0.geometry} material={materials.intercooler} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/car-transformed.glb')
