import localforage from 'localforage'
import isEmpty from 'lodash/isEmpty'
import React, { createContext, useContext, useEffect, useState } from 'react'

export const ConstantsContext = createContext({})

export const ConstantsProvider = ({ pageFrom, pageType, devices, keyword, children, isHaveRecommendation, isHaveCategory }) => {
  const [state, setState] = useState({
    pageFrom,
    pageType,
    devices,
    keyword,
    ip: null,
    location: null,
    storeCode: undefined,
    storeName: undefined,
    isHaveRecommendation: isHaveRecommendation || null,
    isHaveCategory: isHaveCategory || null
  })

  useEffect(() => {
    async function getStorageData () {
      const ip = await localforage.getItem('ip') || null // for get user IP
      const location = await localforage.getItem('location_data') // for get user location info
      const storeData = await localforage.getItem('location_data') // for get store_code after registration in /store-registration
      const storeCode = (!isEmpty(storeData)) ? storeData.store_code : ''
      const storeName = (!isEmpty(storeData)) ? storeData.name : ''
      setState((prev) => ({ ...prev, ip, location: location ? JSON.parse(location) : null, storeName, storeCode }))
    }
    getStorageData()
  }, [])

  return (
    <ConstantsContext.Provider value={state}>
      {children}
    </ConstantsContext.Provider>
  )
}

export function useConstantsContext () {
  return useContext(ConstantsContext)
}
