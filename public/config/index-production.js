window.ENV = 'production'
var productionConfig = {
  baseUrl: 'http://dashboard.timestone.mzdata.top/bigScreenServer',
  fileUrlPrefix: 'http://dashboard.timestone.mzdata.top/bigScreenServer' + '/static'

}
// 必须的
window.CONFIG = configDeepMerge(window.CONFIG, productionConfig)
