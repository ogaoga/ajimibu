/*
 * この画面は JavaScript スクラッチパッドです。
 *
 * JavaScript を入力して、右クリックまたは “実行” メニューを選択してください。
 * 1. 実行: 選択したコードを実行します。(Cmd-R)
 * 2. 調査: 実行結果をオブジェクトインスペクタで表示します。(Cmd-I)
 * 3. 表示: 選択したコードの後ろに、実行結果をコメント形式で挿入します。(Cmd-L)
 */

/**
 * let
 */
if ( false ) {
    let f = function() {
      console.log('---');
      var x = 1;
      let (x = x + 5) {
        console.log(x);
      }
      console.log(x);
    }
    f();
}

/**
 * const
 */


/**
 * destractoring
 */
if ( false ) {
    var [a, b] = (function() {
        return [1, 2];
    })();
    console.log(a+", "+b);
    
    var obj = { name: 'hoge', age: 10 };
    var {age, name} = obj;
    console.log('name:'+name+', age:'+age);
}

/**
 * default value
 */
if ( false ) {
    function add(x, y = 1, z = 2) {
        return x+", "+y+", "+z;
    }
    console.log(add());
    console.log(add(3));
    console.log(add(4, 5));
    console.log(add(6, 7, 8));
}

/**
 * 可変長引数
 */
if ( false ) {
    function joinAll(separator, ...s) {
        console.log(s);
        return s.join(separator);
    }
    console.log(joinAll(',', 1, 2, 3, 4, 5));
}

/**
 * map, set, weakmap
 */
if ( false ) {
    var map = new Map;
    map.set('a', 'A');
    map.set('b', 'B');
    map.set('c', 'C');
    console.log(map.get('a'));
    console.log(map.get('b'));
    
    var set = new Set;
    set.add('10');
    set.add(10);
    set.add("20");
    console.log(set.has(20));
    console.log(set.has('20'));
    console.log(set.has(10));
    console.log(set.has('10'));
    
    var wm = new WeakMap;
    
}

/**
 * for of
 */
if ( false ) {
  console.log('--- set ---');
  let set = Set([1, 2, 3]);
  for ( let i of set ) {
    console.log(i);
  }
  console.log('--- map ---');
  let map = new Map;
  map.set('a', 'A');
  map.set('b', 'B');
  map.set('c', 'C');
  for ( let [k, v] of map ) {
    console.log('k:'+k+' v:'+v);
  }
}

/**
 * iterator, generator (yield)
 */
if ( false ) {
  /**
   * yield は一時停止して値を返す return みたいなもの。
   * iteratable なオブジェクトを返す。
   */
}
