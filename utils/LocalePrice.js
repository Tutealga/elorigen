export const localePrice = (price) => {
  return price.toLocaleString('es-AR', {
    style: 'currency', currency: 'ARS', minimumFractionDigits: 0
  })
}
