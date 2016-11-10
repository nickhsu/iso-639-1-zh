import ISO639 from 'iso-639-1';
import LANGUAGES_ZH_NAMES from './data';

export default class ISO639ZH extends ISO639 {
  static getLanguages(codes) {
    return super.getLanguages(codes).map(l => ({ ...l, zhName: ISO639ZH.getZhName(l.code) }))
  }

  static getZhName(code) {
    return super.validate(code) ? LANGUAGES_ZH_NAMES[code] : ''
  }

  static getAllZhNames() {
    return Object.values(LANGUAGES_ZH_NAMES)
  }
}

