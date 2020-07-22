// Phenom people

// custom hooks
// multiple api call in parallel.
// performance testing in web application.


// ciena


// 1. <div class='c-red c-green'>Hello</div>
// 2. <div class='c-green c-red'>Hello</div>
// // Stylesheet
// .c-red {color: red}
// div .c-green {color: green}


// wrapInDispatch(actions, dispatch) -- wrappedActions
// actions = {
//   action1: (x1, x2) => actionCreator1(x1, x2),
//   action2: (x1) => actionCreator2(x1)
// }
// function wrapInDispatch(actions, dispatch) {
//   let wrappedActions = {}
  
//   arr = actions.getkeys.forEach(act =>{
    
//     return dispatch(actions[act])
//   })
  
  
//   return wrappedActions
// }
// wrappedActions = {
//   action1: (x1, x2) => dispatch(actionCreator1(x1, x2)),
//   action2: (x1) => dispatch(actionCreator2(x1))
// }


// HOC
// LazyloadMe
// ->path -- String
// ->otherProps -- Object
// import
// ->Static -- import X from 'path'
// ->Dynamic -- import('path') -->Promise -> X

// const LazyLoad = (path, obj) =>{
    
//     return new Promise( resolve =>{
//       const path = require(path)
      
      
      
//     }, reject =>{
      
//     })
// }
