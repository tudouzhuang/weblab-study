// 定义一个React组件
class MyComponent extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement('h1', null, 'Hello, World!'),
      React.createElement('p', null, 'This is a simple React component.')
    );
  }
}

// 使用ReactDOM将MyComponent渲染到#root元素中
ReactDOM.render(React.createElement(MyComponent), document.getElementById('root'));
