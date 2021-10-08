/* test20210831.js*/
/* 写一个方法fn(a, b), 实现2-36进制的转换，例如输入fn(23, 12)，输出1b */
function typeListSet (num) {
	let target = []
    for (let i = 0; i < num; i++) {
      if (i <= 9) {
      	target.push(i.toString())
      } else {
        target.push(String.fromCharCode(i+55).toLowerCase())
      }
    }
    return target
}

function solution (num, type) {
  if (type < 2 || type > 36) return false
  let target = []
  let typeList = typeListSet(type)
  console.log('typeList', typeList)
  let count = 0
  let numLeft = num
  while (numLeft > 0 && count <= 3) {
    let numLeft = Math.floor(num / Math.pow(type, count))
    console.log('numLeft', numLeft)
    let resTmp = typeList[numLeft % type]
    console.log('resTmp', resTmp)
    target.unshift(resTmp)
    count++
  }
  let res = target.join('')
  while (res[0] === '0') {
  	res = res.slice(1)
  }
  return res
}

let res = solution(23, 12)
console.log('res', res)

/* 实现一个方法fn(str), 输入 字符串 `['a.b.c=1','a.b.d=2']`，输出
{
	a: {
		b: {
			c: 1,
			d: 2
		}
	}
}
*/
// function clearZKH (str) {
// 	let leftZKHIndex = str.indexOf('[')
//     let rightZKHIndex = str.indexOf(']')
//     let strTmp = str.slice(leftZKHIndex + 1, rightZKHIndex)
//     return strTmp
// }
// function clearYH (str) {
// 	let strArr = str.split(',')
//     let newArr = strArr.map(item => {
//     	console.log('item', item)
//       return item.slice(1, item.length - 1)
//     })
//     return newArr
// }
// function getSamePrefix (strArr) {
// 	let prefix = ''
//     return strArr.reduce((prefix, str) => {
//     	console.log('prefix', prefix)
//       console.log('str', str)
//     	let tmp = ''
//         for (let i = 0; i < prefix.length; i++) {
//         	if (prefix[i] && str[i] && prefix[i] === str[i]) {
//               tmp += prefix[i]
//             } else {
//             	break
//             }
//         }
// 	    return tmp
//     })
// }
// function solution2 (str) {
// 	let targetObj = {}
//     let strArr = clearYH(clearZKH(str))
//     let prefix = getSamePrefix(strArr)
//     let prefixArr = prefix.split('.')
//     let otherStrArr = strArr.map(item => {
//     	return item.slice(prefix.length)
//     })
//     console.log('otherStrArr', otherStrArr)
//     let otherStrArrTmp = otherStrArr.map(item => {
//     	let tmpArr = item.split('=')
//         console.log('tmpArr aa', tmpArr)
//         return [tmpArr[0], tmpArr[1]]
//     })
//     console.log('otherStrArrTmp', otherStrArrTmp)
//     let curr = targetObj
//     prefixArr.forEach(item => {
//     	console.log('item', item)
//         if (item !== '') {
//         	curr[item] = {}
//             curr = curr[item]
//         } else {
//         	console.log('curr', curr)
//             otherStrArrTmp.forEach(item => {
//               curr[item[0]] = Number(item[1])
//             })
            
//         }
//     })
//     console.log('targetObj', targetObj)
//     // console.log('strArr', strArr)
//     // console.log('prefix', prefix)
//     return targetObj
// }

// let res = solution2(`['a.b.c=1','a.b.d=2']`)
// console.log('res', res)

// /* 把时间戳转成日期 大概是 2021/2/1 00:00:00 */
// function solution3 (timeStamp) {
// 	let target = ''
//     let timeTmp = timeStamp
//     // let runNianCount = 
//     let timeMark = {
//       	'msecond': 1,
//     	'second': 1000,
//       	'minute': 60,
//       	'hour': 60,
//       	'date': 24,
//       	'yearNormal': 365,
//       	'yearRun': 366
//     }
//     let yearNormal = timeMark.msecond * 
//         timeMark.second *
//         timeMark.minute *
//         timeMark.hour *
//         timeMark.date *
//         timeMark.yearNormal
//     let yearRun = timeMark.msecond * 
//         timeMark.second *
//         timeMark.minute *
//         timeMark.hour *
//         timeMark.date *
//         timeMark.yearRun
//     let yearHalf = Math.floor(yearNormal / 2)
//     let monthDayCountList = [
//     	31,
//       	28,
//       	31,
//       	30,
//       	31,
//       	30,
//       	31,
//       	31,
//       	30,
//       	31,
//       	30,
//       	31
//     ]
//     let monthRound = timeMark.second *
//         timeMark.minute *
//         timeMark.hour *
//         timeMark.date * 30
//     console.log('yearNormal', yearNormal)
//     console.log('yearRun', yearRun)
//     let yearGroup = yearNormal * 3 + yearRun
//     let yearGroupCount = Math.floor(timeStamp / yearGroup)
//     let tmp = timeStamp % yearGroup - yearRun
//     let yearCount = Math.floor(tmp / yearNormal)
//     let yearContent = yearGroupCount * 4 + 1 + yearCount + 1969 // 一共几组+1970那一年+余下的满一年的数目+1969
//     console.log('tmp', tmp)
//     console.log('yearContent', yearContent)
//     let dayCountLeft = 0
//     if (yearCount < 3) {
//     	dayCountLeft = tmp - yearNormal * 2
//     }

//     monthDayCountList.forEach(item => {

//     })
//     // while (timeTmp > 0) {
//     // 	let resTmp = timeTmp 
//     // }
// }
// let res = solution3(1612108800000)
// console.log('res', res)