import Cookies from 'js-cookie'
import apisauce from 'apisauce'
import config from '../../../config'
import isEmpty from 'lodash/isEmpty'
import CheckUndefined from '../utils/CheckUndefined'
import localforage from 'localforage'
import { SHA256 } from 'crypto-js'

const isV2 = config.useAssignationPhase2

const create = (baseURL = config.apiURL) => {
  const headers = {
    'X-Company-Name': config.companyName,
    'X-Frontend-Type': config.environment,
    'user-platform': config.environment,
    'informa-b2b': config.informaB2b || false
  }

  const headerWithToken = (Authorization) => {
    return {
      headers: { ...headers, Authorization }
    }
  }

  const apiWrapper = apisauce.create({
    baseURL: config.apiURL,
    timeout: 10000,
    headers
  })

  const tokenForage = async () => {
    let token = ''
    try {
      token = await localforage.getItem('access_token')
    } catch (error) {
      console.log(error)
    }
    return token
  }

  const overrideApiWrapper = apisauce.create({
    baseURL: config.overrideShopInShop ? config.overrideApiURL : config.apiURL,
    timeout: 10000,
    headers
  })

  //   const tokenForage = async () => {
  //     let token = ''
  //     try {
  //       token = await localforage.getItem('access_token')
  //     } catch (error) {
  //       console.log(error)
  //     }
  //     return token
  //   }

  const getInspirations = (storeCode, inspirationType) => {
    let endpoint = `/inspirations?storeCode=${CheckUndefined(storeCode)}`
    if (typeof type !== 'undefined' || !isEmpty(inspirationType)) {
      endpoint = `/inspirations/promotions?storeCode=${CheckUndefined(storeCode)}&type=${inspirationType}&is_informab2b=${config.informaB2b || false}`
    }
    return apiWrapper.get(endpoint, {})
  }

  const getNewInspirations = () => {
    return apiWrapper.get('/inspirations/new', {})
  }

  const getCategory = () => {
    return apiWrapper.get(`/category/tree?env=${config.environment}&informab2b=${config.informaB2b || 'false'}`)
  }

  // SEARCHING!!!
  // Required parameters cartId : cart unique id
  const getCart = async (params) => {
    const token = await tokenForage()
    if (token) {
      return apiWrapper.get(`/user/cart/minicart/${params?.minicart_id}`, {}, headerWithToken(token))
    } else {
      return apiWrapper.get(`/cart/minicart/${params?.minicart_id}`)
    }
  }

  const cartAuth = (params) => {
    return apiWrapper.get('/cart/cart-auth/' + params?.cart_id)
  }

  const minicartAuth = (params) => {
    return apiWrapper.get('/cart/minicart/cart-auth/' + params?.minicart_id)
  }

  // Required parameters data : remote_ip, customer, device, items dll (read documentation), cartId : cart unique id
  const updateCart = async (body) => {
    const data = {
      device: config.environment,
      affiliate_id: '',
      device_token: 'pooled',
      store_code: '',
      ...body
    }
    const token = await tokenForage()
    if (token) {
      return apiWrapper.post('/user/cart/minicart/update', { data }, headerWithToken(token))
    } else {
      return apiWrapper.post('/cart/minicart/update', { data })
    }
  }

  // Required parameters cartId : cart unique id
  const deleteCartItem = async (body) => {
    const data = {
      device: config.environment,
      affiliate_id: '',
      device_token: 'pooled',
      store_code: '',
      ...body
    }
    const token = await tokenForage()
    if (token) {
      return apiWrapper.post('/user/cart/minicart/delete', { data }, headerWithToken(token))
    } else {
      return apiWrapper.post('/cart/minicart/delete', { data })
    }
  }

  // log
  const createLog = (data) => {
    return apiWrapper.post('/log/keyword',
      { data }
    )
  }

  const popularSearch = () => {
    return apiWrapper.get('/log/popular')
  }

  const popularSearchAlgolia = () => {
    return apiWrapper.get('/instant/popular', {}, {
      headers: { ...headers, 'X-Algolia-UserToken': Cookies.get('_ALGOLIA') }
    })
  }

  const getCustom = (columnName) => {
    return apiWrapper.get(`/misc/custom?columnName=${columnName}`)
  }

  const getInspirationsSearch = (keyword) => {
    return apiWrapper.get(`/product/inspirations?keyword=${keyword}`)
  }

  // Required parameters keyword
  const searchProductByKeyword = (keyword, storeCode) => {
    return overrideApiWrapper.get(`/product/search/${keyword}?storeCode=${(storeCode)}`)
  }

  const searchbarAlgolia = (keyword, customerId, brand) => {
    if (!isEmpty(brand)) {
      return apiWrapper.get(`/instant/${brand}?keyword=${keyword}`, {}, {
        headers: { ...headers, 'X-Algolia-UserToken': Cookies.get('_ALGOLIA') }
      })
    } else {
      return apiWrapper.get(`/instant/search/${keyword}`, {}, {
        headers: { ...headers, 'X-Algolia-UserToken': (customerId && customerId !== '') ? SHA256(customerId).toString() : Cookies.get('_ALGOLIA') }
      })
    }
  }

  // Required parameters keyword
  const searchPageRedirect = (keyword) => {
    return apiWrapper.get(`/product/pageredirect/${keyword}`)
  }

  const suggestionBar = (data) => {
    return apiWrapper.get(`/instant/suggestion/${data}`)
  }

  const newsletterSubscribe = (data) => {
    return apiWrapper.post('/newsletter/subscribe', { data })
  }

  const downloadMobileAppsSubscribe = ({ body, token }) => {
    return apiWrapper.post('/misc/send-message', { data: body }, headerWithToken(token))
  }

  const getBannerSearchBar = () => {
    return apiWrapper.get('/misc/search-banner')
  }

  // BASO
  const getFloatingVoucher = (data) => {
    return apiWrapper.get(`/baso/warm/floating-voucher/?companyCode=${data.companyCode}&platform=${data.platform}`)
  }

  const getSocialProof = (data) => {
    return apiWrapper.get(`/baso/cold/social-proof/?url_key=${data}`)
  }

  // Facebook Conversion Api
  const facebookConversion = (data) => {
    if (config.isLiveSite) {
      return apiWrapper.post('/facebook/fbcapi', data)
    }
  }

  // Tiktok CAPI
  const tiktokConversion = (data) => {
    if (config.isLiveSite) {
      return apiWrapper.post('/tiktok/capi', data)
    }
  }

  // TAHU
  const dataPlaceholderRandom = (data) => {
    return apiWrapper.get(`/tahu/search-suggestion?isNew=true&is_informab2b=${config.informaB2b || false}`, data)
  }

  const getOrderNonAuth = (data) => {
    return apiWrapper.get('/order/' + data.order_no + '?customer_email=' + data.email)
  }

  const getOrderList = async (data) => {
    const token = await tokenForage()
    return apiWrapper.get('/user/order-summary',
      data,
      headerWithToken(token))
  }

  const checkAuthData = (data) => {
    return apiWrapper.post('/auth/check-otp-auth', data, headerWithToken(config.otpToken))
  }

  const checkAuthDataB2b = (data) => {
    return apiWrapper.post('/auth/check-otp-auth-b2b', data, headerWithToken(config.otpToken))
  }

  const login = (data) => {
    return apiWrapper.post('/auth/login', data)
  }

  const loginB2b = (data) => {
    return apiWrapper.post('/auth/b2b/login', data)
  }
  const registerInformaB2b = (data) => {
    return apiWrapper.post('/auth/b2b/register-b2b', data, headerWithToken(config.otpToken))
  }
  const uploadFileB2b = (data) => {
    return apiWrapper.post('/misc/upload-file-b2b', data, headerWithToken(config.otpToken))
  }

  const getAccount = async (data) => {
    const token = await tokenForage()
    return apiWrapper.get('/auth/b2b/user', data, headerWithToken(token))
  }

  const userProfile = async () => {
    const token = await tokenForage()
    return apiWrapper.get('/user/profile',
      {},
      headerWithToken(token)
    )
  }

  const getInbox = async (data) => {
    const token = await tokenForage()
    if (token) return apiWrapper.get('/inbox/get?token=' + token, data, headerWithToken(token))
    return apiWrapper.get('/inbox/get', data)
  }

  const getInboxUnread = async () => {
    const token = await tokenForage()
    return apiWrapper.get('/inbox/count' + (token ? ('?token=' + token) : ''), {}, headerWithToken(token))
  }

  const markInboxAsRead = async (data) => {
    const token = await tokenForage()
    return apiWrapper.post('/inbox/read', data, headerWithToken(token))
  }

  const getSocialLogin = () => {
    return apiWrapper.get('/misc/url-social-login')
  }

  const getOngoingEvent = (params) => {
    const timeout = params.timeout
    delete params.timeout
    return apiWrapper.get(`/tahu/ongoing-event?is_informab2b=${config.informaB2b || false}`, params, { timeout })
  }

  const getShowroom = (data) => {
    return apiWrapper.get(`/tahu/virtual-showroom/active/new?url_key=${data?.urlKey}&is_informab2b=${config.informaB2b || false}&tab=${encodeURIComponent(data?.tab)}`)
  }

  const getReviewProducts = async (data) => {
    const token = await tokenForage()
    return apiWrapper.get(`/review/summary?token=${token}`,
      {},
      headerWithToken(token)
    )
  }

  const getReasonsReviewProducts = async (data) => {
    const token = await tokenForage()
    return apiWrapper.get(`/review/master?type=${data.type}`,
      {},
      headerWithToken(token)
    )
  }

  const uploadReviewImage = async (data) => {
    const token = await tokenForage()
    return apiWrapper.post('/review/upload',
      data,
      headerWithToken(token)
    )
  }

  const submitReview = async (data) => {
    const token = await tokenForage()
    return apiWrapper.post('/review/product/upsert',
      { data },
      headerWithToken(token)
    )
  }

  const getTahuCampaign = (campaignId, urlKey) => {
    return apiWrapper.get(`/tahu/campaign/active/${campaignId}?url_key=${urlKey}`)
  }

  const getVouchers = async (data) => {
    const token = await tokenForage()
    return apiWrapper.get('/user/vouchers', data, headerWithToken(token))
  }

  /**
   * mendapatkan data provinsi
   *
   * @return  {[Promise]}
   */
  const getProvince = () => {
    return apiWrapper.get('/misc/province')
  }

  /**
   * mendapatkan data kabupaten atau kota beserta dengan provinsi
   *
   *
   * @return  {[Promise]}
   */
  const getCityAlll = () => {
    return apiWrapper.get('/misc/city')
  }
  /**
   * mendapatkan data kabupaten atau kota berdasar provinsi
   *
   * @param   {[integer]}  provId
   *
   * @return  {[Promise]}
   */
  const getCity = (provId) => {
    return apiWrapper.get(`/misc/city/${provId}`)
  }

  /**
   * mendapatkan data kecamatan berdasar kabupaten/kota
   *
   * @param   {[integer]}  cityId
   *
   * @return  {[Promise]}
   */
  const getKecamatan = (cityId) => {
    return apiWrapper.get(`/misc/kecamatan/${cityId}`)
  }

  /**
   * mendapatkan data province dan city berdasarkan negara
   *
   * @param   {[integer]}  countryId
   *
   * @return  {[Promise]}
   */
  const getProvinceCity = (countryId) => {
    return apiWrapper.get(`/misc/city?country_id=${countryId}`)
  }

  /**
   * mendapatkan data dukungan pengiriman
   *
   * @param   {[integer]}  kecId  [kecId id kecamatan]
   *
   * @return  {[Promise]}
   */
  const getExpressDelivery = (kecId) => {
    return apiWrapper.get(`/misc/canExpressDelivery/${kecId}`)
  }

  /**
   * mendapatkan data detail dari cms block
   * @param {string} identifier [url key]
   * @returns
   */
  const getCmsBlockDetail = (identifier) => {
    return apiWrapper.get(`/misc/cms-block-detail?identifier=${identifier}&env=${config.environment}`)
  }

  const getBankData = () => {
    return apiWrapper.get('/misc/bank-installment?to=footer-3.0')
  }

  const getKeywordSuggestion = (keyword) => {
    return apiWrapper.get(`/instant/search/${keyword}`)
  }

  const getQuizQuestions = async (data) => {
    return apiWrapper.get(`/tahu/quiz-inspiration/active?url_key=${data}&device=${config?.environment}&is_informab2b=${config.informaB2b || false}`)
  }

  const getQuizResults = async (data) => {
    if (data) {
      return apiWrapper.get(`/quiz/searching?id=${data?.question}&value=${data?.answer}&from=${data?.from}`)
    } else return null
  }

  const getPersonalisedInformation = async () => {
    return apiWrapper.get('/tahu/personalised-information/active')
  }

  const getWishlistAndCart = async (data) => {
    const token = await tokenForage()
    return apiWrapper.get(`/personalised/wishlist-cart?token=${token}`, data, headerWithToken(token))
  }

  const getPersonalisedVoucher = async (data) => {
    const token = await tokenForage()
    return apiWrapper.get(`/personalised/voucher-list?token=${token}`, data, headerWithToken(token))
  }

  const getPersonalisedOrderStatus = async (data) => {
    const token = await tokenForage()
    return apiWrapper.get(`/personalised/status-order?token=${token}`, data, headerWithToken(token))
  }

  const getLastSeenRecommendation = async (data) => {
    const token = await tokenForage()
    return apiWrapper.get(`/personalised/last-seen?token=${token}`, data, headerWithToken(token))
  }

  // Required parameters category : category name
  const getProductByKeyword = (keyword, from, size, sort, brands, labels, colors, expressCourier, minimumPrice, maximumPrice, storeCode, deliveryMethod) => {
    let variantAttributes = ''

    if (colors && colors !== '') {
      variantAttributes = `color:${colors}`
    }
    return overrideApiWrapper.get(`/product${isV2 ? '/v2' : ''}/keyword/${keyword || ''}?from=${from || 0}&size=${size || 48}&sort=${sort || ''}&brands=${brands || ''}&labels=${labels || ''}&variant_attributes=${variantAttributes}&minprice=${minimumPrice || ''}&maxprice=${maximumPrice || ''}&express_courier=${expressCourier}&storeCode=${CheckUndefined(storeCode) || ''}&deliveryMethod=${deliveryMethod || ''}`)
  }

  const getFeedbackList = () => {
    return apiWrapper.get('/review/feedback/list')
  }

  const submitFeedback = (data) => {
    return apiWrapper.post('/review/feedback/submit', { data })
  }

  const getAddressList = async (token) => {
    return apiWrapper.get('/user/address-list',
      {},
      headerWithToken(token)
    )
  }

  const getPopularBrandSearchList = (data) => {
    return apiWrapper.get('/tahu/popular-brand', data)
  }

  const topSpenderCampaign = (sku) => {
    return apiWrapper.get('/tahu/customer/leaderboard')
  }

  const getAllWishlist = (data) => {
    const { wishlistFrom, wishlistSize } = data.size
    return apiWrapper.get('/user/wishlist',
      { wishlistFrom, wishlistSize },
      headerWithToken(data.auth)
    )
  }

  const getLogoUrl = (brand) => {
    return apiWrapper.get(`/misc/logo-brand/${brand}`)
  }

  // SEO RELATED, mostly for head /jual
  const getSeoAutoLink = (keyword) => {
    return apiWrapper.get(`/seo/autoLink/${keyword}`)
  }

  // Store Image
  const getStoreImage = (keyword) => {
    return apiWrapper.get(`/misc/store-logo/${keyword}`)
  }

  // Referral Tactical
  const getReferralLink = (keyword) => {
    return apiWrapper.get(`/referral/referral-link?channel=${keyword.channel}&id=${keyword.id}&referral_tactical_id=${keyword.referral_tactical_id}`)
  }

  const getActivateTactical = async () => {
    return apiWrapper.get('/referral/active-tactical')
  }
  // Vue.ai

  const sendTrackEvent = async (data) => {
    const token = await tokenForage()
    return apiWrapper.post('/vue/track', data, headerWithToken(token || ''))
  }

  const getVueRecommend = async (data) => {
    const token = await tokenForage()
    return apiWrapper.post('/vue/feeds', data, headerWithToken(token || ''))
  }

  const getProductAwsRecommendation = (data) => {
    return apiWrapper.get('/product/aws/recommendation', data)
  }

  return {
    getOrderNonAuth,
    getOrderList,
    getInspirations,
    getNewInspirations,
    getCategory,
    getCart,
    cartAuth,
    minicartAuth,
    updateCart,
    deleteCartItem,
    getInspirationsSearch,
    searchProductByKeyword,
    searchbarAlgolia,
    searchPageRedirect,
    createLog,
    popularSearch,
    popularSearchAlgolia,
    getCustom,
    suggestionBar,
    newsletterSubscribe,
    downloadMobileAppsSubscribe,
    getBannerSearchBar,
    getFloatingVoucher,
    getSocialProof,
    facebookConversion,
    tiktokConversion,
    dataPlaceholderRandom,
    checkAuthData,
    checkAuthDataB2b,
    uploadFileB2b,
    loginB2b,
    registerInformaB2b,
    getAccount,
    login,
    userProfile,
    getInbox,
    getInboxUnread,
    markInboxAsRead,
    getSocialLogin,
    getOngoingEvent,
    getShowroom,
    getAllWishlist,
    getReviewProducts,
    getReasonsReviewProducts,
    uploadReviewImage,
    submitReview,
    getVouchers,
    getProvince,
    getCityAlll,
    getCity,
    getKecamatan,
    getProvinceCity,
    getExpressDelivery,
    getCmsBlockDetail,
    getBankData,
    getKeywordSuggestion,
    getQuizQuestions,
    getQuizResults,
    getPersonalisedInformation,
    getWishlistAndCart,
    getPersonalisedVoucher,
    getPersonalisedOrderStatus,
    getLastSeenRecommendation,
    getProductByKeyword,
    getFeedbackList,
    submitFeedback,
    getAddressList,
    getPopularBrandSearchList,
    getSeoAutoLink,
    getStoreImage,
    getTahuCampaign,
    topSpenderCampaign,
    getLogoUrl,
    getReferralLink,
    getActivateTactical,
    sendTrackEvent,
    getVueRecommend,
    getProductAwsRecommendation
  }
}

export default {
  create
}
