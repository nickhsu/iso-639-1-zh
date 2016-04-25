import ISO639 from 'iso-639-1'
import * as DATA from './data'

export default class ISO639ZH extends ISO639 {
  static getLanguages(codes) {
    var list = super.getLanguages(codes)
    list.forEach(l => {
      l.zhName = ISO639ZH.getZhName(l.code)
      return l
    })
    return list
  }
  static getZhName(code) {
    if(!super.validate(code)) return ''
    return DATA.LANGUAGES_ZH_NAMES[code]
  }
  static getAllZhNames(){
    var list = [];
    for( var code in DATA.LANGUAGES_ZH_NAMES ){
      list.push(DATA.LANGUAGES_ZH_NAMES[code])
    }
    return list;
  }
}

