import { useQuery } from 'react-query'
import { homepageAPI } from '../../IndexApi'
import queryWrapper from '../base'

export const getIdeaInspirationsKey = 'getIdeaInspirations'
export function useGetIdeaInspirations (params, options) {
  return useQuery([getIdeaInspirationsKey, params], queryWrapper(homepageAPI.getIdeaInspirations), options)
}

export const getEventKey = 'getEvent'
export function useGetEvent (params, options) {
  return useQuery([getEventKey, params], queryWrapper(homepageAPI.getEventDetail), options)
}

export const getCmsBlockDetailKey = 'getCmsBlockDetail'
export function useGetCmsBlockDetail (params, options) {
  return useQuery([getCmsBlockDetailKey, params], queryWrapper(homepageAPI.getCmsBlockDetail), options)
}

export const getTahuWordingContent = 'getTahuWordingContent'
export function useGetTahuWordingContent (params, options) {
  return useQuery([getTahuWordingContent, params], queryWrapper(homepageAPI.wordingContent), options)
}
