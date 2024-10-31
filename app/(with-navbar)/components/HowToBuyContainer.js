import HowToBuy from './HowToBuy'

const HowToBuyContainer = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-col items-center text-center gap-4 mx-auto py-8 px-4 max-w-7xl'>
        <h2 id='como-comprar' className='text-4xl font-bold'>¿Cómo comprar carne a domicilio online?</h2>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
          <HowToBuy title='1. Seleccioná' text='Navega nuestra tienda online en busca de tus productos y añádelos al carrito.'>
            <svg className='text-[#18191F] w-[21px] fa-search' aria-hidden='true' dataprefix='fas' dataIcon='search' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
              <path fill='currentColor' d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z' />
            </svg>
          </HowToBuy>
          <HowToBuy title='2. Añadí al carrito' text='Verás tu lista de productos seleccionados en el carrito del menú.'>
            <svg className='text-[#18191F] w-[21px] fa-shopping-cart' aria-hidden='true' dataprefix='fas' dataIcon='shopping-cart' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
              <path fill='currentColor' d='M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z' />
            </svg>
          </HowToBuy>
          <HowToBuy title='3. Delivery o Take Away' text='Elegí si te lo mandamos a domicilio o si pasarás a retirarlo por nuestro local.'>
            <svg className='text-[#18191F] w-[21px] fa-truck' aria-hidden='true' dataprefix='fas' data-icon='truck' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
              <path fill='currentColor' d='M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z' />
            </svg>
          </HowToBuy>
          <HowToBuy title='4. Métodos de pago' text='Tendrás la posibilidad de pagar en el local o cuando recibas el pedido.'>
            <svg className='text-[#18191F] w-[21px] fa-credit-card' aria-hidden='true' dataprefix='fas' dataIcon='credit-card' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
              <path fill='currentColor' d='M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z' />
            </svg>
          </HowToBuy>
        </div>
      </div>
    </div>
  )
}

export default HowToBuyContainer
