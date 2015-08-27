// Inspired from http://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string
var Manipulate = (function(){
  function redefineFunction(functionString, overrideFunction, context){
    var namespaces = functionString.split(".");
    var func = namespaces.pop();
    for(var i = 0; i < namespaces.length; i++) {
      context = context[namespaces[i]];
    }
    context[func] = overrideFunction;
  }
  return {
    redefineFunction: redefineFunction
  }
})();

export Manipulate
