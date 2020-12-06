import React,{useState} from 'react'



export default function Model({dark, setDisplayForm, displayForm}){
    const [active, setActive] = useState(true)
    const [hover, setHover] = useState(false)
    
    const props = dark?{
        scale:active?[0.12,0.12,0.12]:[0.17,0.17,0.17],
        color: hover?"#3bc7ac":"#f86fbb"
    }:{
        scale:active?[0.12,0.12,0.12]:[0.17,0.17,0.17],
        color: !hover?"#001128":"#d14b11"
    }
    const handleClick=()=>{
        
        setActive(!active)
        setDisplayForm(!displayForm)
    }
    return (
        <mesh
        scale={props.scale}
        position={[-0.1,-0.12,0.3]}
        onPointerOver={()=> setHover(true)}
        onPointerOut={()=> setHover(false)}
        onClick={handleClick}
        >
                <torusKnotBufferGeometry
                    args={[15, 5, 256, 128]}
                />
                 <ambientLight intensity={3}
                 color={"white"} />
                 <rectAreaLight
      width={12}
      height={2.7}
      color={props.color}
      intensity={10}
      position={[65, 20, 15]}
      lookAt={[0.5, 0.3, 0.3]}
      penumbra={2}
      castShadow
    />
                 <meshStandardMaterial
                 attach="material"
                 meshDepthMaterial={1}
                 color={props.color}
                 flatShading={false}
                 shininess={5}
                 clearcoat={1.5}
                 roughness={0.1}
                 metalness={0.5}
                 />
            </mesh>
    )
}