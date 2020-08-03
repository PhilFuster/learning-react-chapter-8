## 08012020

Really struggled with managing state and getting my RepoMenu component to render when a login was changed. The other components were loading just fine.
I basically just reread the last couple of sections and tried to follow all instructions along the way.
I spent a lot of time trying to draw the mental model in my head of passing state around.
I think I learned a lot from reading the code over and over again trying to reason about why it wouldn't work.
I think maybe next time I'll commit the errors. That way when I solve it. I can look back at the original broken code.
Now I don't know what exactly fixed it. It was probably human error like a spelling mistake or something.

**useMountedRef hook**
This hooks uses a _ref_. When a component unmounts, state is wiped clean, but refs are still available. The useEffect call in useMountedRef doesn't have a dependency array; it is invoked every time a component renders and ensures that the value for the ref is true. Whenever the component unmounts, the function returned from useEffect is invoked, which changes the value of the ref to false. This hook can be used in components to make sure the component is mounted before applying any state updates.

A specific use case where useMountedRef is very important is when network speed is limited. Slower connections open up opportunities for situations where an attempt to update state will occur while a component is no longer mounted. This will always cause an error along the lines of 'Can't perform a React state update on an unmounted component.'

### GraphQL

GraphQL is a declarative solution for communicating with APIs. When we make parallel data requests, we're attempting to get all the data we need immediately at the same time. GraphQL was designed to do just that.

In order to get data from a GraphQL API, we still need to make an HTTP request toa specific URI. However, a query must also be sent along with the request. A GraphQL query is a declarative description of the data we're requesting. The service will parse this description and will package all the data we're asking for into a single response.
