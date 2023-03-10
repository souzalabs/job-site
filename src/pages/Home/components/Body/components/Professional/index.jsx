import React from 'react'
import Eu from '../../../../../../assets/eu.jpg'
import './styles.css'

export default function Professional() {
  return (
    <div className='bg-facebook-modal sm:h-80 flex'>
        <div className='flex flex-col justify-center items-center sm:flex sm:flex-row sm:gap-8 sm:p-8'>
          <img src={ Eu } alt="" className='object-cover sm:h-60 sm:w-60 sm:rounded-full' />

          <div className='flex flex-col justify-center relative'>
              <span className='hidden sm:flex square'></span>
              <p className='z-10 p-6 bg-pesca-maravilhosa'>Me chamo Kelven e quero que você saiba que criação de sites, alcance e captação de usuários na internet, bem como análise de resultados, geração de insights e desenvolvimento de estratégias de negócio é a minha especialidade. Te convido a provar do meu trabalho para que você veja a prosperidade do seu negócio e adquira meus serviços.</p>
          </div>
        </div>
    </div>
  )
}

