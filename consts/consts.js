export const ENVIO = 1200

export const categories = {'preparados':'preparados', 'cortes-vacunos':'vacuno', 'cortes-cerdo':'cerdo', 'embutidos-y-achuras':'embutidos y achuras', 'cortes-pollo':'pollo', 'almacen':'almacen'}
export const tags = ['parrilla', 'horno', 'plancha', 'cacerola', 'churrasco', 'milanesa', 'más-baratos', 'más-vendidos']
export const categoriesTags = {"carnes-para-parrilla":'parrilla', "carnes-para-horno":'horno', "carnes-para-plancha":'plancha', "carnes-para-cacerola":'cacerola', "carnes-para-churrascos":'churrasco', "carnes-para-milanesas":'milanesa'}

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
