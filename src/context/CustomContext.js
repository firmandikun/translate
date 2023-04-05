import React, { Component, createContext } from 'react'

const { Provider, Consumer } = createContext({})

export class ContextProvider extends Component {
  render () {
    return (
      <Provider value={this.props.value}>
        {this.props.children}
      </Provider>
    )
  }
}
export const ContextConsumer = Consumer
export const WithContext = (Component) => {
  const key = Math.random()
  return (props) => (
    <Consumer>
      {contenx => <Component {...props} {...contenx} key={`custom_context_${key}`} />}
    </Consumer>
  )
}

export default ContextProvider
