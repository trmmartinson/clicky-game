import React, { Component } from 'react';
import './App.css';
import Tiles from './components/Tiles'
// yuk! these imports were required to get 
//  webpack to include the pictures
import pic0 from './pics/number-0-small.jpg';
import pic1 from './pics/number-1-small.jpg';
import pic2 from './pics/number-2-small.jpg';
import pic3 from './pics/number-3-small.jpg';
import pic4 from './pics/number-4-small.jpg';
import pic5 from './pics/number-5-small.jpg';
import pic6 from './pics/number-6-small.jpg';
import pic7 from './pics/number-7-small.jpg';
import pic8 from './pics/number-8-small.jpg';
import pic9 from './pics/number-9-small.jpg';
import picl from './pics/letter-L-small.jpg';
import picc from './pics/letter-c-small.jpg';
import picb from './pics/letter-b-small.jpg';
import pici from './pics/letter-i-small.jpg';
import picp from './pics/letter-p-small.jpg';
import picz from './pics/letter-z-small.jpg';

class App extends Component {
  state = { score: 0, chosen: [] }
  constructor() {
    super()
    this.message = "";
    this.boxes = [];
    this.randary = [];
    this.boxes.push(pic0);
    this.boxes.push(pic1);
    this.boxes.push(pic2);
    this.boxes.push(pic3);
    this.boxes.push(pic4);
    this.boxes.push(pic5);
    this.boxes.push(pic6);
    this.boxes.push(pic7);
    this.boxes.push(pic8);
    this.boxes.push(pic9);
    this.boxes.push(picl);
    this.boxes.push(picc);
    this.boxes.push(picb);
    this.boxes.push(pici);
    this.boxes.push(picp);
    this.boxes.push(picz);
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
