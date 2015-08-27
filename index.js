var Hijack = (function(){
  function before(fnString, beforeFn){
    // These should be some error checking 
    
    originalFn = getFunctionByName(fnString, window)
    Manipulate.redefineFunction(fnString, function(){
      beforeFn();
      originalFn.appy(window, arguments);
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
  // TODO: Make this a seperate module
  // function executeFunctionByName(functionName, context /*, args */) {
  //   var args = [].slice.call(arguments).splice(2);
  //   var namespaces = functionName.split(".");
  //   var func = namespaces.pop();
  //   for(var i = 0; i < namespaces.length; i++) {
  //     context = context[namespaces[i]];
  //   }
  //   return context[func].apply(this, args);
  // }
  return {
    before: before
  }
})()
