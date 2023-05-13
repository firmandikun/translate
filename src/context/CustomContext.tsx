/* eslint-disable @typescript-eslint/no-shadow */
import React, {Component, createContext} from 'react';

const {Provider, Consumer} = createContext({});

export class ContextProvider extends Component<any> {
  render() {
    return <Provider value={this.props.value}>{this.props.children}</Provider>;
  }
}
export const ContextConsumer = Consumer;
export const WithContext = (Component: any) => {
  const key = Math.random();
  return (props: any) => <Consumer>{contenx => <Component {...props} {...contenx} key={`custom_context_${key}`} />}</Consumer>;
};

export default ContextProvider;
