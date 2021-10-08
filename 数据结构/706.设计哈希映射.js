// 不使用任何内建的哈希表库设计一个哈希映射（HashMap）。
// 实现 MyHashMap 类：

// // MyHashMap() 用空映射初始化对象
// put(key, value) 向 HashMap 插入一个键值对 (key, value) 。如果 key 已经存在于映射中，则更新其对应的值 value 。
// get(key) 返回特定的 key 所映射的 value ；如果映射中不包含 key 的映射，返回 -1 。
// remove(key) 如果映射中存在 key 的映射，则移除 key 和它所对应的 value 。

var MyHashMap = function() {
  this.map = {}
};
MyHashMap.prototype.put = function(key, value) {
  if(Object.prototype.hasOwnProperty.call(this.map, key)) {
    this.map[key] = value;
  } else {
    this.map[key] = value;
  }
  return this.map;
};
MyHashMap.prototype.get = function(key) {
  if(Object.prototype.hasOwnProperty.call(this.map, key)) {
    return this.map[key];
  }
  return -1;
};
MyHashMap.prototype.remove = function(key) {
  if(Object.prototype.hasOwnProperty.call(this.map, key)) {
    delete this.map[key];
  }
  return this.map;
};

myHashMap = new MyHashMap();
console.log(myHashMap.put(1, 1)); // myHashMap 现在为 [[1,1]]
console.log(myHashMap.put(2, 2)); // myHashMap 现在为 [[1,1], [2,2]]
console.log(myHashMap.get(1));    // 返回 1 ，myHashMap 现在为 [[1,1], [2,2]]
console.log(myHashMap.get(3));    // 返回 -1（未找到），myHashMap 现在为 [[1,1], [2,2]]
console.log(myHashMap.put(2, 1)); // myHashMap 现在为 [[1,1], [2,1]]（更新已有的值）
console.log(myHashMap.get(2));    // 返回 1 ，myHashMap 现在为 [[1,1], [2,1]]
console.log(myHashMap.remove(2)); // 删除键为 2 的数据，myHashMap 现在为 [[1,1]]
console.log(myHashMap.get(2));    // 返回 -1（未找到），myHashMap 现在为 [[1,1]]
