import React, { useRef, useState } from 'react'
import { useFrame } from 'react-three-fiber'
import { useSelector } from 'react-redux'

export default (props) => {

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    
    const { boxScale } = useSelector(state => state.three)



    const mesh = useRef() //useRef to access mesh of cube
    //animation and movement
    useFrame(() => 
    {
      if (hovered && !active)
      {
        mesh.current.rotation.z += 0.01
        mesh.current.rotation.x += 0.01
      }
      if(hovered && active)
      {
        mesh.current.rotation.y += 0.02
        mesh.current.rotation.x += 0.06
      }
    })

    return (
        <mesh
        {...props}
        ref={mesh}
        scale={active ? [1.5 * boxScale, 1.5 * boxScale, 1.5 * boxScale] : [1 * boxScale, 1 * boxScale, 1 * boxScale]}
        onClick={e => setActive(!active)}
        onPointerOver={e => setHover(true)}
        onPointerOut={e => setHover(false)}>
        
        <coneBufferGeometry attach="geometry" args={[2, 2, 10]} />
        <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
  }
