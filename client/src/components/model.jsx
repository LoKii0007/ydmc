import React from 'react'
import '../css/model.css'
import { CarModel } from '../3d_models/Car'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Link } from 'react-router-dom'

const Sell = () => {
    return (
        <>

            <div className="sell d-flex justify-content-evenly px-5 align-items-center">
                <div className="model position-relative d-flex justify-content-center align-items-center">
                    <Canvas camera={{ fov: 25, position: [10, 10, 10] }}  >
                        <OrbitControls enableZoom={false} autoRotate={true} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />
                        <CarModel scale={.6} />
                    </Canvas>
                </div>
                <div className="desc d-flex flex-column justify-content-center align-items-center">
                    <div className="desc-title d-flex text-center justify-content-center align-items-center">
                        <h1>view interactive  <br /> 3D model</h1>
                    </div>
                    <div className="desc-footer d-flex justify-content-evenly align-items-center">

                        <div className="view-3d mb-5 text-center">
                            <button className='py-2 px-5'>
                                <Link to="/models">view 3d model</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sell
