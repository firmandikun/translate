import localforage from 'localforage'
import React, { createContext, useContext, useEffect, useState } from 'react'
import Observation from '../container/observation'
import useMemoState from '../utils/hooks/useMemoState'

export const CartAuthContext = createContext({})

export const CartAuthProvider = ({ children }) => {
  const [state, setState] = useState({
    cart: null,
    auth: null,
    access_token: '',
    minicart_id: null,
    // isAuthRefetched only true after auth data is fetched or get from localforage.
    isAuthRefetched: false,
    // isCartRefetched only true after done fetch minicart data (and done checking payment cart if any)
    isCartRefetched: false
  })

  useEffect(() => {
    async function getStorageAuthData () {
      const accessToken = await localforage.getItem('access_token') // for validation state isLogin

      //! Need to remind, comment this back if you want to merge to master
      // 228764e556e795476a4f917dbcef812a5bd6f069
      // await localforage.setItem('minicart_id', 'e646a3df7b0ed13320e56baa9e30bf531c2aa687') // if you want to login in mobile web just put minicart_id from stg that already login and uncomment this

      const minicartId = (await localforage.getItem('minicart_id')) ?? '' // if there is no minicart_id, we get in from cart_id
      setState((prev) => ({ ...prev, access_token: accessToken, minicart_id: minicartId }))
    }
    getStorageAuthData()
  }, [])

  const data = useMemoState(state, setState)
  const onChangeState = data.handleChangeState

  return (
    <CartAuthContext.Provider value={data}>
      <Observation handleChangeState={onChangeState} state={data.state} setState={data.setState}>
        {children}
      </Observation>
    </CartAuthContext.Provider>
  )
}

export function useCartAuthContext () {
  return useContext(CartAuthContext)
}
