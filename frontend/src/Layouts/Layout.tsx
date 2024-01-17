import Footer from '../components/Footer'
import Header from '../components/Header'
import HeaderHero from '../components/HeaderHero'


interface Props{
    children:React.ReactNode
}
export default function Layout({children}:Props) { //descructure from Props
  return (
    <div className='flex flex-col min-h-screen'>
       <Header/>
       <HeaderHero/>
       <div className='container mx-auto py-10 flex-1'>{children}</div>
       <Footer/>
    </div>
  )
}
