# Bug Search and Rescue

Note: Before getting started on these exercises, please be certain that you've read through the root README file in this repository.

## Exercises

---
For the following problems please classify the type of bug this problem may fall under in the following categories:

* TypeError: Cannot read property 'property' of undefined
* TypeError: ‘null’ is Not an Object
* TypeError: Assignment to constant variable
* ReferenceError: Cannot access 'variable’ before initialization / Scope Error
* ReferenceError: 'variable' is not defined
* Uncaught RangeError: Maximum call stack size exceeded
* Infinite Loops
* Logical fallacy
* Style Error
* Syntax error

After identifying and classifying the appropriate type of bug, please write the fix in your IDE or repl.it/javascript for the buggy code.Please feel free to copy and paste the code into your IDE/Code editor. `NOTE!!!!: SOME code may contain more than one type of bug.`

## Advanced Challenges

The following problem(s) are examples of bugs that have not been taught in this workshop but is also common in the real world.

1. Memory Leak

```JavaScript
let theThing = null;

const replaceThing = function () {
  let priorThing = theThing;  // hold on to the prior thing

  const unused = function () {
    // 'unused' is the only place where 'priorThing' is referenced,
    // but 'unused' never gets invoked
    if (priorThing) {
      console.log("hi");
    }
  };
  
  theThing = {
    longStr: new Array(1000000).join('*'),  // create a 1MB object
    someMethod: function () {
      console.log(someMessage);
    }
  };
};
setInterval(replaceThing, 1000);    // invoke `replaceThing' once every second
```

If you run the above code and monitor memory usage, you’ll find that you’ve got a massive memory leak, leaking a full megabyte per second! And even a manual Garbage Collection doesn’t help. So it looks like we are leaking longStr every time replaceThing is called. But why?

Let’s examine things in more detail:

Each theThing object contains its own 1MB longStr object. Every second, when we call replaceThing, it holds on to a reference to the prior theThing object in priorThing. But we still wouldn’t think this would be a problem, since each time through, the previously referenced priorThing would be dereferenced (when priorThing is reset via priorThing = theThing;). And moreover, is only referenced in the main body of replaceThing and in the function unused which is, in fact, never used.

So again we’re left wondering why there is a memory leak here!?

To understand what’s going on, we need to better understand how things are working in JavaScript under the hood. The typical way that closures are implemented is that every function object has a link to a dictionary-style object representing its lexical scope. If both functions defined inside replaceThing actually used priorThing, it would be important that they both get the same object, even if priorThing gets assigned to over and over, so both functions share the same lexical environment. But as soon as a variable is used by any closure, it ends up in the lexical environment shared by all closures in that scope. And that little nuance is what leads to this gnarly memory leak.
