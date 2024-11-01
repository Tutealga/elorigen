import Products from './components/Products'

const page = (search) => {
    return (
        <div className='flex flex-col items-center max-w-7xl mx-auto mt-24 gap-4 py-4'>
          <h2 className='font-bold text-4xl text-center'>Resultados de búsqueda:</h2>
          <Products search={search} />
        </div>
    )
}

export default page