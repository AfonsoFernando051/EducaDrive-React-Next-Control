'use client'

import React, { useState } from "react";
import '../app//styles/globals.css'
import Header from "@/componentes/Header";
import Home from "@/app/page";
import Image from "next/image";

const Cadastrar = function(){
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        type: 'e'
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{   
            const response = await fetch('http://localhost:3001/sign-up',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()
            if (response.ok) {
                alert(data.message);
            } else {
                alert(data);
            }

        }catch(error){
            console.error('Erro ao cadastrar autoescola', error);
        }
    }

    return(
        <>
        <Home>
            <div id="cadastrarPag">
                <form onSubmit={handleSubmit}>
                    <div id="titleForm">
                        <h1>Cadastro de autoescolas clientes</h1>
                    </div>
                    <div className="SignUpForm">
                            <h2>Insira os dados de login:</h2>
                        <div>
                            <input type="text" placeholder="Name" className="inputForm" name="name" value={formData.name} onChange={handleChange}/>
                        </div>
                        <div>
                            <input type="email" placeholder="Email" className="inputForm" name="email" value={formData.email} onChange={handleChange}/>
                        </div>
                        <div>
                            <input type="password" placeholder="Password" className="inputForm" name="password" value={formData.password} onChange={handleChange}/>
                        </div>
                        <div>
                            <input type="password" placeholder="Confirm password" className="inputForm" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}/>
                        </div>
                        <div>
                            <input type="radio" name="acess" id="acess"/>
                            <span>Permissão de acesso</span>
                        </div>
                        <div id="buttonForm">
                            <button id="cadastrar" type="submit">Cadastrar</button>
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
