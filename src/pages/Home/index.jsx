import './styles.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className='bg-bg'>
      <div className='flex flex-col p-8 gap-8 xl:gap-0'>
        <Header />
        <Body />
      </div>

      <Footer />
    </div>
  )
}