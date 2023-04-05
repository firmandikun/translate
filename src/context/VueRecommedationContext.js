import React, { createContext, useContext } from 'react'

export const VueRecommendationContext = createContext({})

export const VueRecommendationProvider = ({ children, data }) => {
  return (
    <VueRecommendationContext.Provider value={data}>
      {children}
    </VueRecommendationContext.Provider>
  )
}

export function useVueRecommendationContext () {
  return useContext(VueRecommendationContext)
}
