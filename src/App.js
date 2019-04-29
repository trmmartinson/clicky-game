import React, { Component } from 'react';
import './App.css';
import Tiles from './components/Tiles'


class App extends Component {
  state = { score: 0, chosen: [] }
  constructor() {
    super()
    this.message = "";
    this.boxes = [];
    this.randary = [];
    let base = "../images/";
    this.boxes.push(base + "number-0-small.jpg");
    this.boxes.push(base + "number-1-small.jpg");
    this.boxes.push(base + "number-2-small.jpg");
    this.boxes.push(base + "number-3-small.jpg");
    this.boxes.push(base + "number-4-small.jpg");
    this.boxes.push(base + "number-5-small.jpg");
    this.boxes.push(base + "number-6-small.jpg");
    this.boxes.push(base + "number-7-small.jpg");
    this.boxes.push(base + "number-8-small.jpg");
    this.boxes.push(base + "number-9-small.jpg");
    this.boxes.push(base + "letter-L-small.jpg");
    this.boxes.push(base + "letter-b-small.jpg");
    this.boxes.push(base + "letter-c-small.jpg");
    this.boxes.push(base + "letter-i-small.jpg");
    this.boxes.push(base + "letter-p-small.jpg");
    this.boxes.push(base + "letter-z-small.jpg");
    this.randarray = this.get_randoms();

  }

  get_randoms() {
    let ary = [];
    for (let x = 0; x < 16; x++)
      ary.push(x);
    return ary.sort(() => Math.random() - 0.5);
  }

  componentDidUpdate() {
   /*j if (this.message.length > 1) {
      alert("didupdate:" + this.message);
      this.message = "";
    } */
  }

  handleClick = (num) => {
    if (this.state.chosen.indexOf(num) === -1) {
      // if the score is 15 and it got here it must be perfect!
      if (this.state.chosen.length === 15) {
        this.setState({ score: this.state.score + 1 });
        this.setState({ score: 0 });
        this.setState({ chosen: [] });
        this.message = "Perfect score!!!!  playing again....";
      }
      else {
        this.setState({ score: this.state.score + 1 });
        this.setState({ chosen: [...this.state.chosen, num] });
      }
    }
    else {
      this.setState({ score: 0 });
      this.setState({ chosen: [] });
      this.message = "You lost!  Playing again...";
    }

    console.log('chosenlist=' + this.state.chosen);
  }

  render() {
    if (this.message.length > 1) {
      alert(this.message);
      this.message = "";
    }
    this.randary = this.get_randoms();
    return (
      <div className="App">
        <div className='jumbotron'>
          <h1>Clicky game</h1>
          <h5> Try to click all of the images without selecting the same one twice!</h5>
          <h5>only super spart people are able to solve this memory game!</h5>
          <h2>score: {this.state.score} </h2>
        </div>

        {[0, 4, 8, 12].map((offset) => (
          <Tiles clicker={this.handleClick}
            fileName1={this.boxes[this.randary[0 + offset]]} num1={this.randary[0 + offset]} key={this.randary[0 + offset]}
            fileName2={this.boxes[this.randary[1 + offset]]} num2={this.randary[1 + offset]} 
            fileName3={this.boxes[this.randary[2 + offset]]} num3={this.randary[2 + offset]} 
            fileName4={this.boxes[this.randary[3 + offset]]} num4={this.randary[3 + offset]} 
          />
        ))}
      </div>
    );
  }
}
export default App;
