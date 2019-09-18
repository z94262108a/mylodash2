const _ = module.exports = {}

/*
_.dropRight([1, 2, 3]);
// => [1, 2]
 
_.dropRight([1, 2, 3], 2);
// => [1]
 
_.dropRight([1, 2, 3], 5);
// => []
 
_.dropRight([1, 2, 3], 0);
// => [1, 2, 3]
*/

_.dropRight =  function(list, n=1) {
    const drlist = []
    //i<list.length-n  ->  如果長度為3，n為2的話  i<3-2=1 i=0 => [1]
    for(let i=0; i<list.length-n; i++) {
        drlist.push(list[i])
    }
    return drlist
}