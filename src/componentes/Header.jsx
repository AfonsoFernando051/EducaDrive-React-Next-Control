import React from "react"
import Image from 'next/image';

export default function Header(){
    
    return (
    <header>
        <nav>
            <Image
                src='/desenvolvimento.png'
                alt='Logo'
                width={50}
                height={50}
                id="logo-nav"
            />
            <h1>EducaManager</h1>
        </nav>
    </header>
    )
}

