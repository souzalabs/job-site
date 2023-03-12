import Bt4 from '../../../../assets/button_4.png'
import Ads from '../../../../assets/ads.png'
import Eu from '../../../../assets/eu_tunado.png'
import Logo from '../../../../assets/mkt_stars.png'
import Bt3 from '../../../../assets/button_3.png'
import Bt2 from '../../../../assets/button_2.png'
import Bt1 from '../../../../assets/button_1.png'
import Eu2 from '../../../../assets/eu_fundo_azul.png'
import ArrowRight from '../../../../assets/iconmonstr-arrow-63-240.png'
import ArrowDown from '../../../../assets/iconmonstr-arrow-65-240.png'

import Card1 from '../../../../assets/1.png'
import Card2 from '../../../../assets/2.png'
import Card3 from '../../../../assets/3.png'
import Card4 from '../../../../assets/4.png'
import Card5 from '../../../../assets/5.png'
import Card6 from '../../../../assets/6.png'

import { useState } from 'react'

export default function Onboard() {

  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)

  return (
    <div className='flex flex-col'>
      <div className="bg-arrows-bg w-screen h-screen bg-cover bg-no-repeat bg-top">
        <div className='flex flex-col justify-center items-center h-full w-full p-6 gap-4'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <p className='font-bold text-xl text-center'>AUMENTE AS VENDAS DA SUA EMPRESA ATRAVÉS DE <span className='text-pesca-maravilhosa'>ANÚNCIOS ESTRATÉGICOS</span></p>
            <p className='text-center text-sm'>Anuncie nas maiores plataformas de vendas do mundo e traga clientes para a sua empresa todos os dias.</p>
          </div>

          <a href="https://api.whatsapp.com/send?phone=5516994072920" target="_blank" className='no-underline'>
            <img src={ Bt4 } alt="" className='w-60' />
          </a>
        </div>
      </div>

      <div className='bg-fundo-branco w-screen h-auto bg-cover bg-no-repeat bg-top flex justify-center items-center py-10 flex-col gap-6'>
        <div className='flex flex-col px-8'>
          <h1 className='text-pesca-maravilhosa font-bold text-xl text-center'>PRINCIPAIS SERVIÇOS</h1>

          <p className='text-bg text-center text-sm'>
            PLANEJAMENTO DE CAMPANHA DE ACORDO COM SEU NEGÓCIO
          </p>
        </div>

        <img src={ Ads } alt="" className='h-screen' />
      </div>

      <div className='bg-black p-6 flex flex-col gap-4'>
        <div className='flex flex-col gap-4'>
          <div className='relative'>
            <div className='flex flex-col gap-4'>
              <img src={Logo} alt="" />
              <img src={ Eu } alt="" />
            </div>

            <h1 className='absolute bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Kelven Souza</h1>
          </div>

          <div className='flex flex-col gap-4'>
            <p className='text-sm'>
              Nosso principal objetivo é <span className='text-pesca-maravilhosa'>conectar você ao cliente qualificado e aumentar as vendas da sua empresa</span>, com as melhores estratégias no mundo digital.
            </p>

            <p className='text-sm'>
              Se você está buscando:
            </p>

            <p className='text-sm'>
              <span className='font-bold'>•</span> Aumentar o faturamento do seu negócio;<br />
              <span className='font-bold'>•</span> Parar de depender das indicações;<br />
              <span className='font-bold'>•</span> Bater as suas metas de venda;<br />
              <span className='font-bold'>•</span> Lucrar mais;<br />
            </p>

            <p className='text-sm'>
              Vamos embarcar nessa?
            </p>
          </div>

          <a href="https://api.whatsapp.com/send?phone=5516994072920" target="_blank" className='no-underline'>
            <img src={ Bt3 } alt="" />
          </a>
        </div>

        <div className='flex flex-col gap-4 items-center'>
          <h1 className='text-center font-semibold text-xl'>COMO FUNCIONA NOSSO SERVIÇO NA PRÁTICA</h1>

          <div className='flex flex-col gap-4'>
            <img src={ Card1 } alt="" />

            <img src={ Card2 } alt="" />

            <img src={ Card3 } alt="" />

            <img src={ Card4 } alt="" />

            <img src={ Card5 } alt="" />

            <img src={ Card6 } alt="" />
          </div>

          
          <a href="https://api.whatsapp.com/send?phone=5516994072920" target="_blank" className='no-underline'>
            <img src={ Bt2 } alt="" className='w-64' />
          </a>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center pt-6 pb-4 gap-4'>
        <img src={ Eu2 } alt="" className='px-12' />

        <div className='flex flex-col gap-4 px-6'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-black font-bold text-2xl'>QUEM SOU EU?</h1>

            <div className='h-1.5 w-48 bg-pesca-maravilhosa'></div>
          </div>

          <p className='text-black text-justify'>Me chamo Kelven Souza, trabalho com tecnologia desde quando estava com 16 anos de idade, são mais de seis anos na área. Estudei em uma das melhores faculdades de negócio da América Latina (FEA - USP) e trabalhei análisando dados e desenvolvendo software em grandes empresas como, o importante laboratório de pesquisas em economia social LEPES, bem como fui um dos primeiros desenvolvedores da Startup Eyecare Health que já há um tempo saiu na mídia Valor Econômico e encerrei a minha carreira, como funcionário, no Grupo Criar - um conglomerado de empresas de mais de 31 anos.</p>
        
          <p className='text-black text-justify'>Hoje, dono da minha própria empresa e entendendo a dor de ser um empreendedor quero te dar a chance de sermos sócios, sim, porque a minha prosperidade depende dos resultados do meu trabalho e do sucesso do seu negócio.</p>
        </div>
      </div>

      <div className='w-screen bg-black px-6 pt-4 pb-6 flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <h1 className='font-semibold text-xl'>DÚVIDAS FREQUENTES</h1>

          <div className='h-1.5 w-60 bg-pesca-maravilhosa'></div>
        </div>

        <div className='flex flex-col border-solid border-2 border-pesca-maravilhosa'>
          <div className='flex flex-col' onClick={() => setIsOpen1(prev => !prev)}>
            <div className='flex flex-row items-center justify-center gap-2 p-2 border-solid border-b-2 border-pesca-maravilhosa'>
              <div className='flex h-4 justify-center items-center'>
                {!isOpen1 ? (
                  <img src={ ArrowRight } alt="" className='h-4' />           
                ) : (
                  <img src={ ArrowDown } alt="" className='h-4' />  
                )}
              </div>

              <h1 className='text-sm font-semibold w-full'>Quanto custa?</h1>
            </div>

            {isOpen1 && <p className='bg-pesca-maravilhosa text-white p-4 text-justify text-sm'>
              O valor mínimo que deve ser investido em cada plataforma é de pelo menos 1 dólar/dia, o que equivale a pelo menos R$ 6,00/dia. Já o valor do nosso serviço é cobrado individualmente
            </p>}
          </div>

          <div className='flex flex-col' onClick={() => setIsOpen2(prev => !prev)}>
            <div className='flex flex-row items-center justify-center gap-2 p-2 border-solid border-b-2 border-pesca-maravilhosa'>
              <div className='flex h-4 justify-center items-center'>
                {!isOpen2 ? (
                  <img src={ ArrowRight } alt="" className='h-4' />           
                ) : (
                  <img src={ ArrowDown } alt="" className='h-4' />  
                )}
              </div>

              <h1 className='text-sm font-semibold w-full'>Quando vou começar a ver os resultados das minhas campanhas?</h1>
            </div>

            {isOpen2 && <p className='bg-pesca-maravilhosa text-white p-4 text-justify text-sm'>
              Não garantimos tempo exato mas os resultados podem ser vistos a partir dos 2 primeiros meses após o início das campanhas.
              Pode acontecer antes disso, mas pedimos esse prazo para a inteligência dos algoritmos das plataformas estudarem o seu anúncio e utilizarem o que dá mais resultado no seu caso.
            </p>}
          </div>

          <div className='flex flex-col' onClick={() => setIsOpen3(prev => !prev)}>
            <div className='flex flex-row items-center justify-center gap-2 p-2 border-solid border-b-2 border-pesca-maravilhosa'>
              <div className='flex h-4 justify-center items-center'>
                {!isOpen3 ? (
                  <img src={ ArrowRight } alt="" className='h-4' />           
                ) : (
                  <img src={ ArrowDown } alt="" className='h-4' />  
                )}
              </div>

              <h1 className='text-sm font-semibold w-full'>É certo que terei resultados?</h1>
            </div>

            {isOpen3 && <p className='bg-pesca-maravilhosa text-white p-4 text-justify text-sm'>
              Vamos levar potenciais clientes até você, mas há outros fatores que influenciam a prosperidade do seu negócio, como a qualidade dos seus produtos e/ou serviços, do seu atendimento e fatores da economia.
            </p>}
          </div>

          <div className='flex flex-col' onClick={() => setIsOpen4(prev => !prev)}>
            <div className='flex flex-row items-center justify-center gap-2 p-2'>
              <div className='flex h-4 justify-center items-center'>
                {!isOpen4 ? (
                  <img src={ ArrowRight } alt="" className='h-4' />           
                ) : (
                  <img src={ ArrowDown } alt="" className='h-4' />  
                )}
              </div>

              <h1 className='text-sm font-semibold w-full'>Posso parar de anunciar em qualquer momento?</h1>
            </div>

            {isOpen4 && <p className='bg-pesca-maravilhosa text-white p-4 text-justify text-sm'>
              Sim. Quando você decidir parar de anunciar os serviços serão interrompidos e você não terá que pagar mais nada até aquele momento.
            </p>}
          </div>
        </div>
      </div>

      <div className='bg-white px-4 py-6 flex flex-col gap-4 justify-center items-center'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-black text-xl text-center font-normal'>ESTÁ PREPARADO PARA AMPLIAR A SUA <span className='text-pesca-maravilhosa font-semibold'>CARTELA DE CLIENTES?</span></h1>

          <p className='text-black text-center text-sm'>Estamos prontos para criar sua estratégia de comunicação e o posicionamento da sua marca para garantir liderança e destaque no mercado.</p>
        </div>


        <a href="https://api.whatsapp.com/send?phone=5516994072920" target="_blank" className='no-underline'>
          <img src={ Bt1 } alt="" className='w-60' />
        </a>
      </div>

      <div className='w-screen h-10 bg-black flex justify-center items-center text-pp'>
        SOUZA LABS © 2023
      </div>
    </div>
  )
}