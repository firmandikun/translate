import GlobalAPI from './GlobalApi'
import HomepageAPI from './HomepageApi'
import ProductDetailAPI from './ProductDetailApi'
import StaticApi from './StaticApi'
import PcpAPI from './PcpApi'
// import accountAPI from '../../account/services/api'

/* Kumpulan link API */
const globalAPI = GlobalAPI.create()
const homepageAPI = HomepageAPI.create()
const productDetailAPI = ProductDetailAPI.create()
const staticAPI = StaticApi.create()
const pcpAPI = PcpAPI.create()

export {
  globalAPI,
  homepageAPI,
  productDetailAPI,
  staticAPI,
  pcpAPI
}
