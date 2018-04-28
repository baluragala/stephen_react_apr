import React, { Component } from "react";

class ManageProduct extends Component {
  constructor() {
    super();
    this.state = { title: "HP Workbook" };
    this.handleChange = this.handleChange.bind(this);
    this.descElement = null;
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              type="text"
              ref={e => {
                //this.descElement = e;
                //e.value = "A laptop by HP";
              }}
            />
          </div>
          <button
            onClick={e => {
              console.log(this.descElement.value);
              e.preventDefault();
            }}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default ManageProduct;
