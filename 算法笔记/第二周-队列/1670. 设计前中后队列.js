// https://leetcode-cn.com/problems/design-front-middle-back-queue/


var FrontMiddleBackQueue = function() {

};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {

};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {

};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {

};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {

};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {

};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {

};


let q = new FrontMiddleBackQueue();
q.pushFront(1);   // [1]
q.pushBack(2);    // [1, 2]
q.pushMiddle(3);  // [1, 3, 2]
q.pushMiddle(4);  // [1, 4, 3, 2]
q.popFront();     // 返回 1 -> [4, 3, 2]
q.popMiddle();    // 返回 3 -> [4, 2]
q.popMiddle();    // 返回 4 -> [2]
q.popBack();      // 返回 2 -> []
q.popFront();     // 返回 -1 -> [] （队列为空）
