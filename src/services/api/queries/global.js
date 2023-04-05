import { useQuery } from 'react-query'
import { globalAPI } from '../../IndexApi'
import queryWrapper from '../base'

export const getCategoriesKey = 'getCategories'
export function useGetCategories (params, options) {
  return useQuery([getCategoriesKey, params], queryWrapper(globalAPI.getCategory), options)
}

export const getBannerSearchKey = 'getBannerSearch'
export function useGetBannerSearch (options) {
  return useQuery(getBannerSearchKey, queryWrapper(globalAPI.getBannerSearchBar), options)
}

export const getPopularSearchAlgoliaKey = 'getPopularSearchAlgolia'
export function useGetPopularSearchAlgolia (options) {
  return useQuery(
    getPopularSearchAlgoliaKey,
    queryWrapper(globalAPI.popularSearchAlgolia, (res) => res.data),
    options
  )
}

export const getFloatingVoucher = 'getFloatingVoucher'
export function useGetFloatingVoucher (data, options) {
  return useQuery(
    [getFloatingVoucher, data],
    queryWrapper(globalAPI.getFloatingVoucher),
    options
  )
}

export const getSocialProof = 'getSocialProof'
export function useGetSocialProof (data, options) {
  return useQuery(
    [getSocialProof, data],
    queryWrapper(globalAPI.getSocialProof),
    options
  )
}

export const getOrderNonAuthKey = 'getOrderNonAuth'
export function useGetOrderNonAuth (params, options) {
  return useQuery([getOrderNonAuthKey, params], queryWrapper(globalAPI.getOrderNonAuth), options)
}

// consider using cart data from cartAuthContext if you want to get current user's cart data.
// the data in context is in sync with this hook (for same minicart_id)
export const getMinicartKey = 'getMinicart'
export function useGetMinicart (params, options) {
  return useQuery([getMinicartKey, params], queryWrapper(globalAPI.getCart), options)
}

export const getRandomizePlaceholderKey = 'getRandomizePlaceholder'
export function useGetRandomizePlaceholder (params, options) {
  return useQuery([getRandomizePlaceholderKey, params], queryWrapper(globalAPI.dataPlaceholderRandom), options)
}

export const getOrderSummaryKey = 'getOrderSummary'
export function useGetOrderSummary (params, options) {
  return useQuery([getOrderSummaryKey, params], queryWrapper(globalAPI.getOrderList), options)
}

export const getUserProfileKey = 'getUserProfile'
export function useGetUserProfile (options) {
  return useQuery(getUserProfileKey, queryWrapper(globalAPI.userProfile), options)
}

export const getMinicartAuthKey = 'getMinicartAuth'
export function useGetMinicartAuth (params, options) {
  return useQuery([getMinicartAuthKey, params], queryWrapper(globalAPI.minicartAuth, (res) => {
    // use the token from res.data
    return {
      ...res.data.data,
      token: res.data.token
    }
  }), options)
}

export const getCartAuthKey = 'getCartAuth'
export function useGetCartAuth (params, options) {
  return useQuery([getCartAuthKey, params], queryWrapper(globalAPI.cartAuth, (res) => {
    // use the token from res.data
    return {
      ...res.data.data,
      token: res.data.token
    }
  }), options)
}

export const getReviewProducts = 'getReviewProducts'
export function useGetReviewProducts (params, options) {
  return useQuery([getReviewProducts, params], queryWrapper(globalAPI.getReviewProducts), options)
}

export const getReasonReviewProducts = 'getReasonReviewProducts'
export function useGetReasonReviewProducts (params, options) {
  return useQuery([getReasonReviewProducts, params], queryWrapper(globalAPI.getReasonsReviewProducts), options)
}

export const getVouchersKey = 'getVouchers'
export function useGetVoucher (params, options) {
  return useQuery([getVouchersKey, params], queryWrapper(globalAPI.getVouchers, options))
}

export const getVirtualShowroomKey = 'getVirtualShowroom'
export function useGetVirtualShowroom (params, options) {
  return useQuery([getVirtualShowroomKey, params], queryWrapper(globalAPI.getShowroom), options)
}

export const getProvince = 'getProvince'
export function useGetProvince (options) {
  return useQuery([getProvince], queryWrapper(globalAPI.getProvince), options)
}

export const getCity = 'getCity'
export function useGetCity (provId, options) {
  return useQuery([getCity, provId], queryWrapper(globalAPI.getCity), options)
}

export const getKecamatan = 'getKecamatan'
export function useGetKecamatan (cityId, options) {
  return useQuery([getKecamatan, cityId], queryWrapper(globalAPI.getKecamatan), options)
}

export const getExpressDelivery = 'getExpressDelivery'
export function useGetExpressDelivery (kecId, options) {
  return useQuery([getExpressDelivery, kecId], queryWrapper(globalAPI.getExpressDelivery), options)
}

export const getSocialLoginKey = 'getSocialLogin'
export function useGetSocialLogin (params, options) {
  return useQuery([getSocialLoginKey, params], queryWrapper(globalAPI.getSocialLogin), options)
}

export const getOngoingEventKey = 'getOngoingEvent'
export function useGetOngoingEvent (params, options) {
  return useQuery([getOngoingEventKey, params], queryWrapper(globalAPI.getOngoingEvent), options)
}

export const getInboxKey = 'getInbox'
export function useGetInbox (params, options) {
  return useQuery([getInboxKey, params], queryWrapper(globalAPI.getInbox), options)
}

export const getInboxUnreadKey = 'getInboxUnread'
export function useGetInboxUnread (params, options) {
  return useQuery([getInboxUnreadKey, params], queryWrapper(globalAPI.getInboxUnread), options)
}

export const getBankData = 'useGetBankData'
export function useGetBankData (params, options) {
  return useQuery([getBankData, params], queryWrapper(globalAPI.getBankData), options)
}

export const getQuizInspirationQuestions = 'getQuizInspiration'
export function useGetQuizQuestions (params, options) {
  return useQuery([getQuizInspirationQuestions, params], queryWrapper(globalAPI.getQuizQuestions), options)
}

export const getQuizInspirationResults = 'useGetQuizResults'
export function useGetQuizResults (params, options) {
  return useQuery([getQuizInspirationResults, params], queryWrapper(globalAPI.getQuizResults), options)
}

export const getPersonalisedInformation = 'getPersonalisedInformation'
export function useGetPersonalisedInformation (params, options) {
  return useQuery([getPersonalisedInformation, params], queryWrapper(globalAPI.getPersonalisedInformation), options)
}

export const getWishlistAndCart = 'getWishlistAndCart'
export function useGetWishlistAndCart (params, options) {
  return useQuery([getWishlistAndCart, params], queryWrapper(globalAPI.getWishlistAndCart), options)
}

export const getPersonalisedVoucher = 'getPersonalisedVoucher'
export function useGetPersonalisedVoucher (params, options) {
  return useQuery([getPersonalisedVoucher, params], queryWrapper(globalAPI.getPersonalisedVoucher), options)
}

export const getPersonalisedOrderStatus = 'getPersonalisedOrderStatus'
export function useGetPersonalisedOrderStatus (params, options) {
  return useQuery([getPersonalisedOrderStatus, params], queryWrapper(globalAPI.getPersonalisedOrderStatus), options)
}

export const getLastSeenRecommendation = 'getLastSeenRecommendation'
export function useGetLastSeenRecommendation (params, options) {
  return useQuery([getLastSeenRecommendation, params], queryWrapper(globalAPI.getLastSeenRecommendation), options)
}

export const getAddressList = 'useGetAddressList'
export function useGetAddressList (token, options) {
  return useQuery([getAddressList, token], queryWrapper(globalAPI.getAddressList), options)
}

export const getProvinceData = 'getProvinceData'
export function useGetProvinceData (params, options) {
  return useQuery([getProvinceData, params], queryWrapper(globalAPI.getProvince), options)
}

export const getCityData = 'getCityData'
export function useGetCityData (params, options) {
  return useQuery([getCityData, params], queryWrapper(globalAPI.getCity), options)
}

export const getKecamatanData = 'getKecamatanData'
export function useGetKecamatanData (params, options) {
  return useQuery([getKecamatanData, params], queryWrapper(globalAPI.getKecamatan), options)
}

export const getUserDataB2b = 'getUserDataB2b'
export function useGetUserDataB2b (params, options) {
  return useQuery([getUserDataB2b, params], queryWrapper(globalAPI.getAccount), options)
}

export const getPopularBrandSearch = 'getPopularBrandSearch'
export function useGetPopularBrandSearch (params, options) {
  return useQuery([getPopularBrandSearch, params], queryWrapper(globalAPI.getPopularBrandSearchList), options)
}

export const getStoreImage = 'getStoreImage'
export function useStoreImage (params, options) {
  return useQuery([getStoreImage, params], queryWrapper(globalAPI.getStoreImage), options)
}

export const getLogoUrlKey = 'getLogoUrlKey'
export function useGetLogoUrlKey (params, options) {
  return useQuery([getLogoUrlKey, params], queryWrapper(globalAPI.getLogoUrl), options)
}

export const getAllWishlist = 'getAllWishlist'
export function useGetAllWishlist (params, options) {
  return useQuery([getAllWishlist, params], queryWrapper(globalAPI.getAllWishlist), options)
}

export const getReferralLink = 'getReferralLink'
export function useGetReferralLink (params, options) {
  return useQuery([getReferralLink, params], queryWrapper(globalAPI.getReferralLink), options)
}

export const getActivateTactical = 'getActivateTactical'
export function useGetActivateTactical (params, options) {
  return useQuery([getActivateTactical, params], queryWrapper(globalAPI.getActivateTactical), options)
}

export const getVueRecommend = 'getVueRecommend'
export function useGetVueRecommend (params, options) {
  return useQuery([getVueRecommend, params], queryWrapper(globalAPI.getVueRecommend, options))
}

export const getAwsRecommended = 'getAwsRecommended'
export function useGetAwsRecommended (params, options) {
  return useQuery([getAwsRecommended, params], queryWrapper(globalAPI.getProductAwsRecommendation), options)
}

export const getSeoAutoLink = 'getSeoAutoLink'
export function useGetSeoAutoLink (params, options) {
  return useQuery([getSeoAutoLink, params], queryWrapper(globalAPI.getSeoAutoLink), options)
}
