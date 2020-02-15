import React, { useRef, useState } from 'react'
import { useFrame } from 'react-three-fiber'
import { useSelector } from 'react-redux'

export default (props) => {

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    
    const { boxScale } = useSelector(state => state.three)

    const mesh = useRef()
    
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

    return (
        <mesh
        {...props}
        ref={mesh}
        scale={active ? [1.5 * boxScale, 1.5 * boxScale, 1.5 * boxScale] : [1 * boxScale, 1 * boxScale, 1 * boxScale]}
        onClick={e => setActive(!active)}
        onPointerOver={e => setHover(true)}
        onPointerOut={e => setHover(false)}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
  }