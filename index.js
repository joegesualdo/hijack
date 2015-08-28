var Hijack = (function(){
  return {
    before: before
  }

  function before(fnString, beforeFn){
    // These should be some error checking 
    
    originalFn = getFunctionByName(fnString, window)
    Manipulate.redefineFunction(fnString, function(){
      beforeFn.apply(this, arguments);
      originalFn.apply(this, arguments);
      // executeFunctionByName(fnString, window);
    }, window)
  }

  function getFunctionByName(functionName, context /*, args */) {
    var namespaces = functionName.split(".");
    var func = namespaces.pop();

    for(var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
      }

    return context[func];
  }
})()
