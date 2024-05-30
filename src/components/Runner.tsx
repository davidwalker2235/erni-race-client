import { Suspense } from 'react'
import { SpriteAnimator } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import './Runner.css'

const Runner = ({active, image}: {active: boolean, image: string}) => {
  return (
    <Canvas className="runner animate">
      <Suspense fallback={null}>
        <SpriteAnimator
          scale={[8,8,8]}
          position={[0,0,0]}
          startFrame={0}
          autoPlay={false}
          loop={true}
          numberOfFrames={8}
          alphaTest={0.01}
          textureImageURL={image}
          fps={8}
          play={active}
        />
      </Suspense>
    </Canvas>
  )
}

export default Runner