import '@/styles/globals.css'
import { Toaster } from '@/components/ui/toaster'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: 'Carniceria online a domicilio - Carne premium - El Origen',
  description: 'Carniceria online con CARNE PREMIUM a DOMICILIO. Ubicados en San Isidro, envios GBA Zona Norte. Abierta de 9:30-14:00 y 15:00-20:00'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='es'>
      <body className='relative bg-[#eeeeee]'>
        {children}
        <Toaster />
      </body>
      <GoogleAnalytics gaId="G-5R8XZ9E4YR" />
    </html>
  )
}

export default RootLayout
