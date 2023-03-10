import './styles.css'
import React from 'react'
import { ReactComponent as WhatsApp } from '../../../../assets/iconmonstr-whatsapp-1.svg'
import Card from './components/Card'
import Elizabethi from '../../../../assets/elizabethi.png'
import Proof from '../../../../assets/insights.png'
import Professional from './components/Professional'

export default function Body() {
  return (
      <div className='flex flex-col gap-8'>
        <Card 
          budget={'< R$ 30,00'} 
          time={'~3 dias'} 
          company={'Elizabeth I'} 
          logo={Elizabethi} 
          proof={Proof} 
          niche={'Vestuário'} 
          platforms={'Facebook, Instagram'} 
        />

        <Professional />

        <a 
          href="https://api.whatsapp.com/send?phone=5516994072920" 
          target="_blank"
          className='flex gap-4 bg-whatsapp py-4 px-8 justify-center align-items sm:w-60 sm:m-auto'
        >
          <WhatsApp />
          
          FALE CONOSCO
        </a>
      </div>
  )
}