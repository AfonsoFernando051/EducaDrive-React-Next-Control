import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function(){
    
    return(
        <section>
            <div id="section-img">
                <div className="images-side">
                    <Image
                        src='/casa.png'
                        alt='home'
                        width={60}
                        height={60}
                        id="home-side"
                    />
                </div>
                <div className="images-side">
                    <Image
                            src='/chave.png'
                            alt='home'
                            width={60}
                            height={60}
                            id="home-side"
                        />
                </div>
            </div>
            <ul>
            <Link href="/Cadastrar"><li>Cadastrar</li></Link>
                <li><Link href="">Conferir</Link></li>
                <li><Link href="">Atualizar</Link></li>
                <li><Link href="">Deletar</Link></li>
            </ul>
        </section>
    )
}