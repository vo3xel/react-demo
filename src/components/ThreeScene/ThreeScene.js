import { Box } from './'
import React from 'react'
import { Canvas }  from 'react-three-fiber'
import { Provider, useStore } from 'react-redux'

export default () => {

    const store = useStore()

    return(
        <Canvas style={{height: '40vmin'}}>
            <Provider store={store}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[-4, 0, 0]} />
                <Box position={[4, 0, 0]} />
                <Box position={[0, 0, 0]} />
            </Provider>
        </Canvas>
    )
}