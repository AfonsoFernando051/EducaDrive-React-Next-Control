import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function(){
    
    return(
        <section>
            <div id="section-img">
                <Link href="/" className="image-section">
                    <div className="images-side">
                    <Image
                            src='/casa.png'
                            alt='home'
                            width={70}
                            height={70}
                            id="home-side"
                        />
                    </div>
                </Link>
                <Link href="/" className="image-section">
                <div className="images-side">
                    <Image
                            src='/chave.png'
                            alt='home'
                            width={60}
                            height={60}
                            id="home-side"
                        />
                </div>
                </Link>

            </div>
            <ul>
                <Link href="/Cadastrar" className="routeSide">
                    <Image
                        src='/icons/adicionar-usuario.svg'
                        alt='home'
                        width={30}
                        height={30}
                        className="sideIcon"
                    />
                    <li >
                        Cadastrar
                    </li>
                </Link>
                <Link href="/Cadastrar" className="routeSide">
                    <Image
                        src='/icons/caixa-de-selecao.svg'
                        alt='home'
                        width={30}
                        height={30}
                        className="sideIcon"
                    />
                    <li >
                    Conferir
                    </li>
                </Link>
                <Link href="/Cadastrar" className="routeSide">
                    <Image
                        src='/icons/almoco-foguete.svg'
                        alt='home'
                        width={30}
                        height={30}
                        className="sideIcon"
                    />
                    <li >
                    Atualizar
                    </li>
                </Link>
                <Link href="/Cadastrar" className="routeSide">
                    <Image
                        src='/icons/lixo.svg'
                        alt='home'
                        width={30}
                        height={30}
                        className="sideIcon"
                    />
                    <li >
                    Deletar
                    </li>
                </Link>
            </ul>
        </section>
    )
}