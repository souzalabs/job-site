import Logo from '../../../../assets/logo.png'
import React from 'react';
import { ReactComponent as Fishing } from '../../../../assets/undraw_fishing_hoxa.svg'
import './styles.css'

export default function Header() {
  return (
    <div className='flex flex-col lg:grid lg:grid-cols-2'>
      <div className='flex flex-col justify-between gap-8'>
        <div className='title'>
          <img src={Logo} alt="" />

          <span className='title-divisor'></span>

          <div className='specialyst-description'>
            <p>VISÃO</p>
            <p>ESTRATÉGIA</p>
            <p>TECNOLOGIA</p>
          </div>
        </div>

        <div className='h-full pr-8 flex flex-col gap-8'>
          <h1 className='font-bold uppercase text-xl text-center sm:text-left md:text-3xl'>Conquiste novos clientes, atinja o topo dos anúncios e torne-se uma referência</h1>

          <p className='text-center sm:text-left md:text-lg'>Conheça os nossos serviços de <span className='font-bold'>gestão de tráfego</span>, <span className='font-bold'>desenvolvimento de sites</span>, <span className='font-bold'>marketing</span> e <span className='font-bold'>publicidade</span>, para tornar o seu negócio um sucesso na internet.</p>

          <p className='text-center sm:text-left md:text-lg'>Com um orçamento de <span className='font-bold'>R$30,00 (Trinta reais)</span> em anúncios você já consegue <span className='font-bold'>expandir seu alcance</span> e <span className='bolded-text'>atrair novos potenciais clientes</span>.</p>
        </div>
      </div>

      <div className='hidden lg:flex p-8'>
        <Fishing className='h-auto' />
      </div>
    </div>
  )
}