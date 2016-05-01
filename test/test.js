var assert = require('assert')
var ISO639ZH = require('../build/index')
var DATA = require('../build/data')

var zhNameList = []

for( var code in DATA.LANGUAGES_ZH_NAMES ){
  zhNameList.push( DATA.LANGUAGES_ZH_NAMES[code])
}

describe('getZhName()', function() {
  it('en', function(){
    assert.equal(ISO639ZH.getZhName('en'), '英语')
  })
  it('zh', function(){
    assert.equal(ISO639ZH.getZhName('zh'), '中文')
  })
})

describe( 'getAllZhNames()', function(){
    it('All languages Chinese names match',function(){
      assert.deepEqual(ISO639ZH.getAllZhNames(), zhNameList)
    })
})

describe('getLanguages()', function() {
  it('[en,es]', function(){
    assert.deepEqual(ISO639ZH.getLanguages(['en','es']), [{code:'en',name:'English',nativeName:'English',zhName:'英语'},{code:'es',name:'Spanish',nativeName:'Español',zhName:'西班牙语'}])
  })
})
