export function before(fnString, beforeFn){
  fn = window[fnString]
  fnCopy = window[fnString]
  if(typeof fn === 'function'){
    window[fnString] = function(){
      beforeFn();
      fnCopy();
    }
  }
}
