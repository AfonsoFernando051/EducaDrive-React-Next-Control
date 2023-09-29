import React, {useState} from "react";
import '../app//styles/globals.css'
import Header from "@/componentes/Header";
import Home from "@/app/page";
import Image from "next/image";
import { useState } from 'react';

const Cadastrar = function(){
    
    return(
        <>
        <Home>
            <div id="cadastrarPag">
                <form>
                    <div id="titleForm">
                        <h1>Cadastro de autoescolas clientes</h1>
                    </div>
                    <div className="SignUpForm">
                            <h2>Insira os dados de login:</h2>
                        <div>
                            <input type="text" placeholder="name" className="inputForm"/>
                        </div>
                        <div>
                            <input type="email" placeholder="email" className="inputForm"/>
                        </div>
                        <div>
                            <input type="password" placeholder="password" className="inputForm"/>
                        </div>
                        <div>
                            <input type="radio" name="acess" id="acess" />
                            <span>Permissão de acesso</span>
                        </div>
                        <div id="buttonForm">
                            <button id="cadastrar">Cadastrar</button>
                            <button id="cancelar">Cancelar</button>
                        </div>
                    </div>
                </form>
            </div>
        </Home>
        </>
    )
}

export default Cadastrar
