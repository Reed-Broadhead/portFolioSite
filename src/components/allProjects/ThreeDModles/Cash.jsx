/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 cash.gltf --transform
Author: Virtual Museums of Małopolska (https://sketchfab.com/WirtualneMuzeaMalopolski)
License: CC0-1.0 (http://creativecommons.org/publicdomain/zero/1.0/)
Source: https://sketchfab.com/3d-models/cash-register-with-a-counting-machine-6b6ecc33993d49939bd4c7633c795577
Title: Cash register with a counting machine
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/cash-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.kw_3434_kasa_z_urzadzlicz_01_low_poly_14___Default_0.geometry} material={materials['14___Default']} position={[36.776, -78.376, 7.361]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={90.404} />
    </group>
  )
}

useGLTF.preload('/cash-transformed.glb')