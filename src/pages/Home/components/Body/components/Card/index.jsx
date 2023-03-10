import React from 'react'
import './styles.css'

export default function Card({ budget, time, company, proof, niche, platforms }) {

  return (
    <div className='flex flex-col sm:grid sm:grid-cols-2 w-full sm:h-80 bg-facebook-modal'>
        <div className='bg-pesca-maravilhosa p-8 flex flex-col gap-4'>
            <div className='flex flex-col lg:flex-row items-center lg:gap-1'>
                <h1 className='text-2xl font-bold'>Anúncio</h1>
                <h1 className='text-sm'>(Demonstração de cliente)</h1>
            </div>

            <div>
                <div className='flex gap-1'>
                    <p className='font-bold'>Orçamento:</p>{budget}
                </div>

                <div className='flex gap-1'>
                    <p className='font-bold'>Tempo:</p>{time}
                </div>

                <div className='flex gap-1'>
                    <p className='font-bold'>Empresa:</p>{company}
                </div>

                <div className='flex gap-1'>
                    <p className='font-bold'>Nicho:</p>{niche}
                </div>

                <div className='flex gap-1'>
                    <p className='font-bold'>Plataformas:</p>{platforms}
                </div>
            </div>
        </div>

        <div className='m-auto'>
            <img src={ proof } alt="" />
        </div>
    </div>
  )
}