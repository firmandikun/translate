import { useEffect, useState } from 'react'
import remoteConfig from '@react-native-firebase/remote-config'

const useRemoteFirebase = (initialUrl) => {
  const [data, setData] = useState()
  const [fetching, setFetching] = useState(false)
  useEffect(() => {
    if (initialUrl) RemoteConfig(initialUrl)
  }, [])
  const get = (params) => RemoteConfig(params)
  const RemoteConfig = async (params) => {
    setFetching(true)
    // await remoteConfig().setConfigSettings({
    //   isDeveloperModeEnabled: __DEV__
    // })
    // await remoteConfig().setDefaults({
    //   enable_ads: true,
    //   enable_patreon_login: true
    // })
    // await remoteConfig().fetch(0) <= firebase has now rejected requests
    await remoteConfig().fetch()
    const activated = await remoteConfig().activate()
    if (!activated) console.log('Remote Config not activated')
    const result = remoteConfig().getValue(params)
    setData(JSON.parse(result._value))
    setFetching(false)
  }
  return { get, data, fetching }
}

export default useRemoteFirebase
