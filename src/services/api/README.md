# React Query Folder Structure
```
mutations/
  global.js
  auth.js
  ...
queries/
  global.js
  cart.js
  ...
base.js
client.js
```

`base.js` are helper functions that helps you create react queries and mutations.
`client.js` exports the react query client to be used by the provider, or to invalidate and refetch queries.

`mutations` folder only include custom hooks that calls useMutation.
`queries` folder only include custom hooks that calls useQuery.
Separation in those 2 folders are alike with redux separation.
File inside mutations doesn't have to be inside queries, vice versa. Because there may be cases where a resource (e.g. auth) only have mutations, without any queries.

## Queries
For each query, it is preferred to export 2 things:
1. The query key (this is needed to enable easier invalidations of queries).
2. The custom hook with useQuery inside.

First parameter of useQuery accepts string or array.
Note:
- Use string (it's the query key) when you don't need to pass any parameter to the action function (second parameter of useQuery).
- Use array if you want to pass any parameter to the action function. First element of the array will be ignored, which makes the second element becomes the first parameter, etc (This behavior happens only if you wrap the action function inside queryWrapper). 

Second parameter of useQuery accepts a function which is the function that will be called when you want to call the api. It is preferred to wrap it with queryWrapper. The parameter can be given from the first parameter (use array).

Third parameter is the custom configuration for the query. You can put for example onSuccess, onError, cacheTime, etc ([full list here](https://react-query.tanstack.com/reference/useQuery)). This is optional.
Important configs are:
- enabled: boolean to set whether you want to fetch on mount or no.
- onSuccess
- onError

## Mutations
To create mutations, you can just use mutationWrapper(actionFunction). This returns a custom hook that calls useMutation inside it. You can use the returned function to use the mutation, and use the returned mutate attribute to call it.
e.g.
```
// shared/global/services/api/mutations/global.js
const useSubscribeNewsLetter = mutationWrapper(globalAPI.newsletterSubscribe)

// Component.jsx
// ...
const { mutate } = useSubscribeNewsLetter()
// ...
<button onClick={mutate}>mutate</button>
// ...
```

You can pass a second parameter as default configuration ([full list here](https://react-query.tanstack.com/reference/useMutation)).
For example, you have a cart mutation, that after it finishes, you want to invalidate the get cart query (which will make react query fetch it consider the cached values invalid, and fetch it again when used).
```
// shared/global/services/api/mutations/cart.js
const useUpdateCart = mutationWrapper(globalAPI.updateCart, {
  onSuccess: () => queryClient.invalidateQueries(getCartKey)
})

// Component.jsx
// ...
const { mutate } = useUpdateCart
// ...
<button onClick={() => mutate()}>mutate</button>
// ...
```

If there is another component that uses `getCart`, and mutate is successfully called, `getCart` query will be refetched.