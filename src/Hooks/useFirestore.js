import firestore from '@react-native-firebase/firestore'
import { useEffect, useState } from 'react'
import { Platform } from 'react-native'
import has from 'lodash/has'
import isEmpty from 'lodash/isEmpty'

const useFirestore = (collectionName) => {
  const [data, setData] = useState([])
  const [fetching, setFetching] = useState(false)
  const [err, setErr] = useState(null)
  useEffect(() => {
    const subscriber = firestore()
      .collection(collectionName)
      .onSnapshot(onResult, onError)
    return () => subscriber()
  }, [])

  const onResult = querySnapshot => {
    const result = []
    querySnapshot.forEach(documentSnapshot => {
      const data = documentSnapshot.data()
      if (has(data, Platform.OS)) result.push(data)
    })
    setData(result)
    setFetching(false)
  }
  const onError = err => setFetching(false) && setErr(err)

  return { data, fetching, err }
}

export const useConfigFirestore = (config, initialValue = null) => {
  const [data, setData] = useState(initialValue)
  const [fetching, setFetching] = useState(false)
  const [err, setErr] = useState(null)

  const val = {
    data: () => {
      return {
        android: true,
        ios: false
      }
    }
  }
  useEffect(() => {
    const subscriber = firestore()
      .collection('config')
      .doc(config)
      .onSnapshot(onResult, onError)
    return () => subscriber()
  }, [])
  const onResult = (doc = val) => {
    if (!isEmpty(doc)) {
      setData(doc?.data()?.[Platform.OS] ?? [])
      setFetching(false)
    }
  }
  const onError = err => setFetching(false) && setErr(err)

  return { data, fetching, err }
}

export default useFirestore
