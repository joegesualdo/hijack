var Hijack = (function(){
  function before(fnString, beforeFn){
    // These should be some error checking 
    
    Manipulate.redefineFunction(fnString, function(){
        beforeFn();
        executeFunctionByName(fnString, window)
      }
    })
  }

  function executeFunctionByName(functionName, context /*, args */) {
    var args = [].slice.call(arguments).splice(2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for(var i = 0; i < namespaces.length; i++) {
      context = context[namespaces[i]];
    }
    return context[func].apply(this, args);
  }
  return {
    before: before
  }
})()
