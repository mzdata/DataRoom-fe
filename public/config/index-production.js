window.ENV = 'production'
var productionConfig = {
  baseUrl: 'https://www.mzdata.top/bigScreenServer',
  fileUrlPrefix: 'https://www.mzdata.top/bigScreenServer' + '/static'

}
// 必须的
window.CONFIG = configDeepMerge(window.CONFIG, productionConfig)
