import React, { Component } from 'react';

const AppContext = React.createContext();
export const AppConsumer = AppContext.Consumer;

class ContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileName: 'I am File Name',
      data: [],
      sourceNodes: null,
      targetNodes: null,
      nodes: null,
      values: null,
      objectsData: null,
      file: null,
    };
  }

  render() {
    const { children } = this.props;
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          setData: fileData => this.setState({ data: fileData }),
          setObjectsData: data => this.setState({ objectsData: data }),
          setSourceNodes: sourceNodes => this.setState({ sourceNodes }),
          setTargetNodes: targetNodes => this.setState({ targetNodes }),
          setNodes: nodes => this.setState({ nodes }),
          setFile: file => this.setState({ file, fileName: file.name }),
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

export default ContextProvider;
