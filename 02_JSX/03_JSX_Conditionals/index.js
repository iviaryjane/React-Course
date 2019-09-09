function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}


class NumPicker extends React.Component {
    render() {
      const num = getNum();
      let msg;
      if(num === 8){
        msg =
          <div>
          <h2>CONGRATS 2 YEW!</h2>
          <img src="https://media1.giphy.com/media/Bz7QGRnKIVeq4/giphy.gif" />
          </div>
      } else {
        msg = <p>Sorry You Lose!</p>
      }
      return (
        <div>
          <h1>Your number is: {num} </h1>
          {msg}
        </div>
          // <p>{num === 8 ? 'Congrats!' : 'Unlucky!'}</p>
          // {num === 8 &&
          //   <img src="https://media1.giphy.com/media/Bz7QGRnKIVeq4/giphy.gif" />
          // }
      )
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));
