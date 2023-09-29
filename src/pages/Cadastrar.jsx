import React from "react";
import '../app//styles/globals.css'
import Header from "@/componentes/Header";
import Home from "@/app/page";

const Cadastrar = function(){
    
    return(
        <>
        <Home>
            <form>
                <h2>Criar Login</h2>
                <div className="SignUpForm">
                    <div>
                        <input type="text" placeholder="Nome"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Email"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Senha"/>
                    </div>
                    <div>
                        <button>Cadastrar</button>
                        <button>Cancelar</button>
                    </div>
                </div>
            </form>
        </Home>
        </>
    )
}

export default Cadastrar
