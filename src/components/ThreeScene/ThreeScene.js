import { Box } from './'
import React from 'react'
import { Canvas }  from 'react-three-fiber'

export default () => {
    return(
    <Canvas style={{height: '40vmin'}}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
    </Canvas>
    )
}