## Manipulate
> Manipulate things in Javascript

## Install
```
$ bower install --save manipulate
```

## API

### Methods
#### .redefineFunction(functionString, newFunction, context)

### .redefineFunction
```javascript
var Person = (function(){
  function greeting(){console.log("Hello!")}
  return {
    greeting: greeting
  }
})()

function rudeGreeting(){
  console.log("Sup, sucker!")
}

Person.greeting() // #=>  "Hello!"

redefineFunction("Person.greeting", rudeGreeting, window)

Person.greeting() // #=>  "Sup, sucker!"
```

##### Also works with prototype functions:
```javascript
String.prototype.yell = function(){
  return this + "!"
}

function reallyYell(){
  return this + "!!!!!!!!"
}

"Hello".yell() // #=>  "Hello!"

redefineFunction("String.prototype.yell", reallyYell, window)

"Hello".yell() // #=>  "Hello!!!!!!!!"
```

