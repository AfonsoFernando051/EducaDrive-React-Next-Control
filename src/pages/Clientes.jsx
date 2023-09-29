'use client'

import Home from "@/app/page"
import React, {useState, useEffect} from "react"
import { BsFillPencilFill, BsFillTrashFill} from 'react-icons/bs'
import Link from "next/link"

export default function GetClients(){
    
    const [clientes, setClientes] = useState([
        {
            id: 0,
            name: '',
            email: ''
        }
    ]) 

    useEffect(() => {
        async function fetchDados(){
            try{
                const response = await fetch('http://localhost:3001/read-escolas')
                    .then((response => response.json()))
                    .then((data) => setClientes(data))
                    .catch((error) => console.error('Ocorreu um erro ao buscar os dados.', error));
            }catch(error){
                console.error('Ocorreu um erro ao buscar os dados.', error);
            }
        }
        fetchDados();
    }, [])

    return(
        <Home>
            <div id="">
                <div id="titleList" className="shadow">
                    <h1>Listagem de autoescolas clientes</h1>
                </div>
                <table className="shadow">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((data) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>
                                <div>
                                    <Link href='/Editar/:id'><BsFillPencilFill size={20} /></Link>
                                    <BsFillTrashFill size={20} id="trash"/>
                                </div>
                            </td>
                        </tr> 
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </Home>
    )
}