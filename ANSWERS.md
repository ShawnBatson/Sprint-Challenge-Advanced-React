- [ x] Why would you use class component over function components (removing hooks from the question)?
  --Because you can use React lifestyle methods inside a class component, and it helps coordinate logic in a manner that keeps state at the forefront. It also allows the use of the "this" keyword.

- [ x] Name three lifecycle methods and their purposes.

  - componentDidMount -- This will fire off as the component it is in is inserted into the dom, so immediately upon call
  - componentDidUpdate -- this will fire off whenever the state and props are updated in the component, or the component itself is updated in certain ways.
  - render -- This one is required in a class component. It renders what's beneath it taking into consideration any "this" keywords associated with the component.

- [ ] What is the purpose of a custom hook?
  - So you can re-use logic elsewhere in the app.

* [ ] Why is it important to test our apps?
      -It helps find bugs that we wouldn't normally catch, it helps by testing out the functions as they are written, and whenever a user interacts with them in ways that the developers don't think about due to comfortability with the written code. It also helps by making sure things aren't returning false positives and makes sure the logic is universal for that units situation.
