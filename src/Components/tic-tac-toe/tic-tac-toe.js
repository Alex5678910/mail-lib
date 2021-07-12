import React, {Component} from 'react';
import './style.css'

class TicTacToe extends Component {

    state = {
        squares: Array(9).fill(null),
        count: 0,
    }

    isWinner = () => {
        console.log('Norm')
    }

    clickHandler = (event) => {
        const data = event.target.getAttribute('data')
        const vix = (this.state.count % 2 === 0) ? 'X' : 'O'

        if (this.state.squares[data] === null){

            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.squares[data] = vix
            this.setState((j) => {
                return {
                    count: j.count + 1,
                }
            })
        }else alert('Hey')

        this.isWinner()
    }

    render() {
        return (
            <div className={'Tic-tac-toe'}>
                {
                    this.state.squares.map((el, index) => {
                       return (
                           <div className="ttt-grid" onClick={this.clickHandler} data={index} key={index}>
                               {this.state.squares[index]}
                           </div>
                       )
                    })
                }
            </div>
        );
    }
}

export default TicTacToe;

