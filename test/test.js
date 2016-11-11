import assert from 'assert';
import ISO639ZH from '../build/index';
import LANGUAGES_ZH_NAMES from '../build/data';

const zhNameList = Object.values(LANGUAGES_ZH_NAMES)

describe('getZhName()', () => {
  it('en', () => assert.equal(ISO639ZH.getZhName('en'), '英语'))
  it('zh', () => assert.equal(ISO639ZH.getZhName('zh'), '中文'))
})

describe('getAllZhNames()', () => {
  it('All languages Chinese names match', () => assert.deepEqual(ISO639ZH.getAllZhNames(), zhNameList))
})

describe('getLanguages()', () => {
  it('[en,es]', () => {
    assert.deepEqual(ISO639ZH.getLanguages(['en', 'es']), [
        {
          code: 'en',
          name: 'English',
          nativeName: 'English',
          zhName: '英语'
        }, {
          code: 'es',
          name: 'Spanish',
          nativeName: 'Español',
          zhName: '西班牙语'
        }
      ]
    )
  })
})
