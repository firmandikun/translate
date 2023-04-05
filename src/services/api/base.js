import isEmpty from 'lodash/isEmpty'
import { useMutation } from 'react-query'

/**
 * This is a data processor that helps validate errors and get data from the response. It's pre-configured for common api response from wrapper
 * @param {object} response awaited response of api call.
 * @param {function} dataLoader custom function that gets the data from the response.
 * @returns data returned from dataLoader or throws error if there is error in validation steps.
 */
export function getResponseData (response, dataLoader = (res) => res.data.data) {
  if (response.status === 200) {
    if (!isEmpty(response.data?.errors)) {
      let errMsg = response.data.errors.message
      if (response.data.errors.title === 'Unauthorized') {
        errMsg = 'Anda tidak dapat mengakses data ini, pastikan Anda memeriksa kembali parameter yang dikirimkan sesuai dengan otoritas role Anda.'
      }
      throw new Error(errMsg)
    } else {
      if ((typeof response?.data?.error === 'object' && !isEmpty(response?.data?.error)) || (typeof response?.data?.error === 'boolean' && response?.data?.error)) {
        throw new Error(response.data.message)
      } else {
        return dataLoader(response)
      }
    }
  } else {
    throw new Error(`Error response status: ${response.status}, check network for details`)
  }
}

/**
 * Function that wraps api functions to be used in react query hook. React query action function accepts the parameters provided from the query list in the queryKey attribute. By wrapping it with this function, it will give the parameters of the function from the queryKey (first parameter of useQuery) without the first string key. It also passes the response to getResponseData.
 * @param {function} func function to be wrapped
 * @param {function} dataLoader dataLoader function to customize data getter in getResponseData.
 * @returns wrapped function
 */
export default function queryWrapper (func, dataLoader) {
  return async ({ queryKey }) => {
    const res = await func(...queryKey.slice(1))
    return getResponseData(res, dataLoader)
  }
}

function makeCombinedCallback (defaultConfig, config, attr) {
  return (...data) => {
    defaultConfig && defaultConfig[attr] && defaultConfig[attr](...data)
    config && config[attr] && config[attr](...data)
  }
}
export function mergeDefaultAndCustomMutationConfig (defaultConfig, config, overrideDefaultConfig) {
  let combinedCallbacks = {
    onSuccess: config?.onSuccess,
    onError: config?.onError
  }
  if (!overrideDefaultConfig) {
    combinedCallbacks = {
      onSuccess: makeCombinedCallback(defaultConfig, config, 'onSuccess'),
      onError: makeCombinedCallback(defaultConfig, config, 'onError')
    }
  }
  return {
    ...defaultConfig,
    ...config,
    ...combinedCallbacks
  }
}
/**
 * Function to make useMutation easier.
 * @param {function} func api to be called when mutate is called.
 * @param {object} defaultConfig default configuration for the api call. Example use: { onSuccess: () => queryClient.invalidateQueries(getCartKey) }. This will make react query mark getCart api cache to be stale, which makes it refetch the cart when it is used, rather than using the cached values.
 * @returns custom hook which calls useMutation function.
 */
export function mutationWrapper (
  func,
  defaultConfig
) {
  return function (config, overrideDefaultConfig) {
    const combinedConfig = mergeDefaultAndCustomMutationConfig(defaultConfig, config, overrideDefaultConfig)
    return useMutation(func, combinedConfig)
  }
}
