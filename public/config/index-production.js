window.ENV = 'production'
var productionConfig = {
  baseUrl: 'https://dashboard.timestone.mzdata.top/bigScreenServer',
  fileUrlPrefix: 'https://dashboard.timestone.mzdata.top/bigScreenServer' + '/static'

}
// 必须的
window.CONFIG = configDeepMerge(window.CONFIG, productionConfig)
