// 输入
var arr = [
  { id: '1'},{id: '1-1'},{id: '1-2' },{id: '1-3'},{id: '1-2-1'},{id: '1-2-1-1' },
  { id: '3-1' },{ id: '4-2-1' }, {  id: '2' }, { id: '2-1' }, { id: '2-2-1' }
]

const getTree = (arr) => {
  let target = {};
  for(let i = 0; i < arr.length; i++) {
    let val = arr[i].id;
    keys = val.split('-');
    target = createObj(target, keys)
  }
  console.log('target', JSON.stringify(target, null, 2))
  return target;
}
function createObj(target, keys) {
  let pos = 0;
  let obj = target;
  let url = '';
  while(pos < keys.length) {
    let cur = keys[pos];
    url = pos === 0 ? cur : `${url}-${cur}`
    if(!obj[url]) {
      obj[url] = {}
    }
    pos++;
    obj = obj[url];
  }
  return target;
}
console.log('target', getTree(arr))
// console.log(createObj({}, [ '1', '2', '3', '4' ]))
// console.log('1-2-1-1'.split('-'))
// 输出
var obj ={
  '1': {
    '1-1': {},
    '1-2': {
      '1-2-1': {
        '1-2-1-1': {}
      }
    }
  },
  '2': {
    '2-1': {},
    '2-2': {
      '2-2-1': {}
    }
  },
  '3': {
    '3-1':{}
  },
  '4': {
    '4-2': {
      '4-2-1': {}
    }
  }
}

// function mergeDeepList(list) {
//   let map = {}
//   let tree = [];
//   for(let i = 0; i < list.length; i++) {
//     let cur = list[i];
//     map[cur.id] = list[i];
//   }
//   for(let j = 0; j < list.length; j++) {
//     let cur = list[j];
//     if(map[cur.pid]) {
//       map[cur.pid].children = map[cur.pid].children || [];
//       map[cur.pid].children.push(cur);
//       delete cur.pid
//     } else {
//       tree.push(cur);
//     }
//   }
//   console.log('list', JSON.stringify(tree, null, 2));
// }