import { useMatcapTexture, Center, Text3D, OrbitControls } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const IcosahedronGeometry = new THREE.IcosahedronGeometry()
const material = new THREE.MeshMatcapMaterial()

export default function HeaderBox()
{
    const donuts = useRef([])
    const text = useRef()

    const [ matcapTexture ] = useMatcapTexture('C47004_F9D00C_EDAF04_E09704', 256)

    useFrame((state, delta) =>
    {
        for(const donut of donuts.current)
        {
            donut.rotation.y += delta * 2
        }

        // floating
        text.current.position.y = Math.sin(state.clock.elapsedTime * 1.5)
    })

    useEffect(() =>
    {
        matcapTexture.colorSpace = THREE.SRGBColorSpace
        matcapTexture.needsUpdate = true

        material.matcap = matcapTexture
        material.needsUpdate = true
    }, [])

    return <>
        <OrbitControls makeDefault />

        <Center>
            <Text3D
                material={ material }
                font="./PSR.json"
                size={ 2 }
                height={ 0.5 }
                curveSegments={ 12 }
                bevelEnabled
                bevelThickness={ 0.02 }
                bevelSize={ 0.02 }
                bevelOffset={ 0 }
                bevelSegments={ 5 }
                ref={text}
            >
                HELLO WORLD
            </Text3D>
        </Center>

        { [...Array(100)].map((value, index) =>
            <mesh
                ref={ (element) => donuts.current[index] = element }
                key={ index }
                geometry={ IcosahedronGeometry }
                material={ material }
                position={ [
                    (Math.random() - 0.5) * 50,
                    (Math.random() - 0.5) * 25,
                    (Math.random() - 0.5) * 50 - 15
                ] }
                scale={ 0.5 + Math.random() * 0.2 }
                rotation={ [
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                    0
                ] }
            />
        ) }

    </>
}