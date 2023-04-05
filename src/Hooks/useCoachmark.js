import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'

/**
 * Custom hook for getting coachmark visibility status
 * @param  {Object} config coachmark configuration which contains coachmark name and version
 * @returns {Boolean} coachmark visibility status
 */
const useCoachmark = (config) => {
  const [isVisible, setVisible] = useState(false)

  const closeCoachmark = () => {
    AsyncStorage.setItem(config.name, config.version)
    setVisible(false)
  }

  useEffect(() => {
    (async () => {
      const version = await AsyncStorage.getItem(config.name)
      setVisible(version !== config.version)
    })()
  }, [])

  return [isVisible, closeCoachmark]
}

export default useCoachmark
