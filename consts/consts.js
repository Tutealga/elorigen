export const ENVIO = 1200

export const categories = ['preparados', 'cortes-vacunos', 'cortes-cerdo', 'embutidos-y-achuras', 'cortes-pollo', 'almacen']
export const tags = ['parrilla', 'horno', 'plancha', 'cacerola', 'churrasco', 'milanesa', 'más-baratos', 'más-vendidos']

const date = new Date()
const year = date.getFullYear()
const month = String(date.getMonth() + 1).padStart(2, '0')
const day = String(date.getDate()).padStart(2, '0')
const finalDate = `${year}-${month}-${day}`

export const initialBuyer = {
  name: '',
  phone: '',
  direction: '',
  localidad: '',
  cp: '',
  nota: '',
  deliveryDate: finalDate,
  deliveryTime: '11:00 - 12:00'
}
