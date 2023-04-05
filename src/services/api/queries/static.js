import { useQuery } from 'react-query'
import { staticAPI } from '../../IndexApi'
import queryWrapper from '../base'

export const getFilterLooksKey = 'getFilterLooks'
export function useGetFilterLooks (options) {
  return useQuery([getFilterLooksKey], queryWrapper(staticAPI.getFilterLooks, options))
}

export const getProductDetailsKey = 'getProductDetails'
export function useGetProductDetails (params, options) {
  return useQuery([getProductDetailsKey, params], queryWrapper(staticAPI.getProductDetails, options))
}

export const getTestimonialVideosKey = 'getTestimonialVideos'
export function useGetTestimonialVideos (options) {
  return useQuery([getTestimonialVideosKey], queryWrapper(staticAPI.getTestimonialVideos, options))
}

export const getOurLooksKey = 'getOurLooks'
export function useGetOurLooks (params, options) {
  return useQuery([getOurLooksKey, params], queryWrapper(staticAPI.getOurLooks, options))
}

export const getOtherLooksKey = 'getOtherLooks'
export function useGetOtherLooks (params, options) {
  return useQuery([getOtherLooksKey, params], queryWrapper(staticAPI.getOtherLooks, options))
}
