import { tags } from '@/consts/consts'

export const getProducts = async ({ params, tagsParams, id, search, sort }) => {
  const csv = await fetch(process.env.GOOGLE_SHEETS)
    .then((res) => res.text())

  const products = csv
    .split('\n')
    .slice(1)
    .map((row) => {
      const [id, name, price, discount, pricetwo, priceten, unidad, category, tags, img, prom] = row.split('\t')

      return { id, name, price: Number(price), discount: Number(discount), pricetwo: Number(pricetwo), priceten: Number(priceten), unidad, category, tags: tags.split('|'), img, prom: parseFloat(prom.replace(',', '.')) }
    })

  if (search) {
    return products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
  }

  if (params) {
    const filteredProducts = products.filter(product => product.category === params)

    if (tagsParams && tags.includes(tagsParams)) {
      if (sort === 'lowest') {
        return filteredProducts.sort((a, b) => a.price - b.price).filter(product => product.tags.includes(tagsParams))
      }

      if (sort === 'highest') {
        return filteredProducts.sort((a, b) => b.price - a.price).filter(product => product.tags.includes(tagsParams))
      }
    }

    if (sort === 'highest') {
      return filteredProducts.sort((a, b) => b.price - a.price)
    }

    return filteredProducts.sort((a, b) => a.price - b.price)
  }

  if (tagsParams && tags.includes(tagsParams)) {
    return products.filter(product => product.tags.includes(tagsParams)).slice(0, 5)
  }

  if (id) {
    return products.find(product => product.id === id)
  }

  return products.slice(0, 5)
}
