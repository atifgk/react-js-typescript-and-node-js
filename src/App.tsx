import React from 'react';
import './App.css';

interface State {
  firstValue: number;
  secondValue: number;
  result: number;
}

export class App extends React.Component<{}, State> {

  constructor(props: any) {
    super(props);
    this.state = { firstValue: 0, secondValue: 0, result: 0 }
    this.handleSum = this.handleSum.bind(this);
  }


  handleSum = async (e: any) => {
    e.preventDefault();
    const { firstValue, secondValue } = this.state;
    const response = await fetch('/api/sum', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstValue: firstValue, secondValue: secondValue }),
    });
    this.setState({ result: +await response.text() });

  };

  render() {
    return <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center bg-danger">Calculator</h1>
          <div className="card offset-md-3 col-md-6">
            <div className="card-body col-md-6 offset-md-3">
              <h6 className="text-center">Enter the numbers</h6>
              <input className="form-control form-group" placeholder="number 1" onChange={(e) => { this.setState({ firstValue: +e.target.value }) }} />
              <input className="form-control form-group" placeholder="number 2" onChange={(e) => { this.setState({ secondValue: +e.target.value }) }} />
              <button className="btn btn-danger btn-block" onClick={(e) => { this.handleSum(e) }}>Sum</button>
            </div>
            <hr />
            <div className="col-md-6 offset-md-3">
              <h6 className="text-center">Results</h6>
              <div className="form-control text-center border-danger">{this.state.result}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default App;
