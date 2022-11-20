import React from 'react';

export default class TestState extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      s1: 1,
      s2: 1,
    };
    console.log('constructor ==');
  }
  test = () => {
    // s1 = 1
    let { s1 } = this.state;
    this.setState({ s1: s1++ });
    this.setState({ s1: s1++ });
    this.setState({ s1: s1++ });
    console.log('s1:', s1);
  };

  componentDidMount() {
    // 异步函数里触发，setState是同步的
    setTimeout(() => {
      let { s2 } = this.state;
      this.setState({ s2: s2++ });
      console.log('s2:', s2);
      this.setState({ s2: s2++ });
      console.log('s2:', s2);
      this.setState({ s2: s2++ });
      console.log('s2:', s2);
    }, 0);
  }
  render() {
    console.log('render ==');
    return (
      <div>
        <div style={{ padding: '20px' }}>
          {/* 原生事件setState的异步的，并且进行了合并，只进行了一次刷新 */}
          <button onClick={this.test}>原生click按钮</button>
          <div>s1:{this.state.s1}</div>
        </div>
        <div style={{ padding: '20px' }}>
          <div>s2:{this.state.s2}</div>
        </div>
      </div>
    );
  }
}
