import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/componentes/Header'
import './styles/globals.css'
import Sidebar from '@/componentes/Sidebar'
// import Layout from '@/componentes/Layout'
import Cadastrar from '@/pages/Cadastrar'

export default function Home({children}) {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <main>{children}</main>
    </div>
    </>
  )
}
