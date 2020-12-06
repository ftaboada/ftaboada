import React from 'react'
import {Canvas} from "react-three-fiber"
import Model from "./model"
import Controller from "./controller"


export default function Three({dark, bkColor, setDisplayForm,displayForm}){

    return (
        <Canvas
        style={{height:"100vh"}}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 5.5], near: 0.5, far: 25, zoom:0.5 }}
            >
            <fog  attach="fog" args={[bkColor, 0.2,20]}/>
            <Controller/>         
            <Model dark={dark} setDisplayForm={setDisplayForm} displayForm={displayForm}/>  
        </Canvas>

    )
}