class App extends React.Component {
  render(){
    return(
      <div>
        <Hello to="Ronald" from="Mary Jane" />
        <Hello to="Zipper" from="Atom" />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
