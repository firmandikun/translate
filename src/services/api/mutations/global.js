import Cookies from 'js-cookie'
import localforage from 'localforage'
import { useMutation } from 'react-query'
import { useCartAuthContext } from '../../../context/CartAuthContext'
import { globalAPI } from '../../IndexApi'
import { mergeDefaultAndCustomMutationConfig, mutationWrapper } from '../base'
import queryClient from '../client'
import { getMinicartKey } from '../queries/global'

export const useSubscribeNewsLetter = mutationWrapper(globalAPI.newsletterSubscribe)
// use this format only if you need to access context/hooks inside
export function useUpdateMinicart (config, overrideDefaultConfig) {
  const { handleChangeState } = useCartAuthContext()

  const defaultConfig = {
    onSuccess: (res) => {
      const data = res?.data?.data
      const minicartId = data?.minicart_id
      if (minicartId) {
        handleChangeState('minicart_id', minicartId)
        localforage.setItem('minicart_id', minicartId)
        Cookies.set('minicart_id', minicartId)
      }
      queryClient.invalidateQueries(getMinicartKey)
    }
  }
  const combinedConfig = mergeDefaultAndCustomMutationConfig(defaultConfig, config, overrideDefaultConfig)
  return useMutation(globalAPI.updateCart, combinedConfig)
}

export const useDeleteMinicart = mutationWrapper(globalAPI.deleteCartItem, {
  onSuccess: () => {
    queryClient.invalidateQueries(getMinicartKey)
  }
})
export const useCheckAuthData = mutationWrapper(globalAPI.checkAuthData)
export const useLogin = mutationWrapper(globalAPI.login)
export const useMarkInboxAsRead = mutationWrapper(globalAPI.markInboxAsRead)
export const useUploadReviewImage = mutationWrapper(globalAPI.uploadReviewImage)
export const useSubmitReview = mutationWrapper(globalAPI.submitReview)
export const useSubscribeDownloadMobileApps = mutationWrapper(globalAPI.downloadMobileAppsSubscribe)
export const useCreateLog = mutationWrapper(globalAPI.createLog)
export const useCheckAuthDataB2b = mutationWrapper(globalAPI.checkAuthDataB2b)
export const useLoginB2b = mutationWrapper(globalAPI.loginB2b)
export const useRegisterFormB2b = mutationWrapper(globalAPI.registerInformaB2b)
export const useUploadFileB2b = mutationWrapper(globalAPI.uploadFileB2b)
export const useSendTrackEvent = mutationWrapper(globalAPI.sendTrackEvent)
export const useGetVueRecommend = mutationWrapper(globalAPI.getVueRecommend)
