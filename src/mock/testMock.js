const Mock = require('mockjs')

/*  1-
const data = Mock.mock({
  'list|1-10': [{
    'id|+1': 1
  }]
})
console.log(data)
data = { list: [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 } ] }
*/

/*   2-
Mock.Random.image()
Mock.Random.color()

const imgs = Mock.mock({
  'imgs|2-5': [  //生成图片大小为200X200 颜色随机,字体颜色为#FFF,文字为look
    '@image("200X200","@color","#FFF","look")'
  ]
})
console.log(imgs)
imgs = {
  imgs: [
    'http://dummyimage.com/200X200/f2bb79',
    'http://dummyimage.com/200X200/9879f2',
    'http://dummyimage.com/200X200/7df279',
    'http://dummyimage.com/200X200/f279a0'
  ]
} */

/*   3-
Mock.Random.title()
const title = Mock.mock('@title(2,5)')
console.log(title)
//title为2-5个词
title = 'Dlsrgncn Ybbxyp Jhocvt' */

/*  4-
Mock.Random.ctitle()
const ctitle = Mock.mock('@ctitle(2,7)')
console.log(ctitle)
//汉字 */

/*  5-  汉字
Mock.Random.cname()
const name = Mock.mock('@cname')
console.log(name)
 */
