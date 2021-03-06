import React, { Component } from "react";  
import { connect } from "react-redux";
import { addTodo } from "./Item.actions";
import ItemList from "./ItemList"


function mapDispatchToProps(dispatch) {
  return {
    addTodo: text => dispatch(addTodo(text))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { text } = this.state;
    this.props.addTodo({ text });
    this.setState({ text: "" });
  }
  render() {
    const { text } = this.state;
    return (
      <div>
        {/* <ItemList/> */}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Todo App</label>
            <input
              type="text"
              id="text"
              value={text}
              placeholder="Todo"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">SAVE</button>
        </form>
      </div>
    );
  }
}

const FormList = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default FormList;

// export default class FormList extends Component{

//   state = {
//     text: ""
//   };

//   handleChange  = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   };
//   render(){
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//             <input
//               name = "text"
//               value = {this.state.text}
//               onChange = {this.handleChange}
//               placeholder = "Todo"
//             />
//             <button onClick={handleSubmit}>Add Todo</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ItemList);

  