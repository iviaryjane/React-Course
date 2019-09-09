class Hello extends React.Component{
    render(){
      const props = this.props;
      return <p>Hi {this.props.to} from {this.props.from}</p>;
    }
}
