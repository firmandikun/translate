import { createContext, useContext, useState } from 'react'

export const SeoContext = createContext({})

export const SeoProvider = ({ seoData = { products: [], categories: [], algoliaProducts: [], metaData: {}, sosmedData: {} }, children }) => {
  const { products, categories, algoliaProducts, metaData, sosmedData } = seoData
  const [productsSeo, setProductsSeo] = useState(products?.map((el) => {
    return {
      name: el.name,
      url_key: el.url_key,
      review: el.review,
      variants: el.variants
    }
  }))
  const [categoriesSeo] = useState(categories)
  const [algoliaProductsSeo] = useState(algoliaProducts?.rawResults?.map((elResults) => {
    const results = []
    if (elResults?.hits) {
      for (let i = 0; i < elResults?.hits?.length; i++) {
        results.push({
          name: elResults?.hits[i].name,
          url_key: elResults?.hits[i].url_key,
          review: elResults?.hits[i].review,
          default_price: elResults?.hits[i].default_price || 0,
          special_price: elResults?.hits[i].special_price || 0,
          images: elResults?.hits[i].images || 0
        })
      }
    }
    return results
  }))
  const [metaDataSeo] = useState(metaData)
  const [sosmedDataSeo] = useState(sosmedData)

  return (
    <SeoContext.Provider value={{
      productsSeo,
      setProductsSeo,
      categoriesSeo,
      algoliaProductsSeo,
      metaDataSeo,
      sosmedDataSeo
    }}
    >
      {children}
    </SeoContext.Provider>
  )
}

export function useSeoContext () {
  return useContext(SeoContext)
}
