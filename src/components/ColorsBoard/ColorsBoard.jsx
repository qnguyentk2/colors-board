/* eslint-disable no-debugger */
/* eslint-disable no-param-reassign */
import React, { Component } from 'react';

import styles from './ColorsBoard.scss';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i+=1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const swapArrayElements = (arr, indexA, indexB) => {
  const temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
  return arr;
};

class ColorsBoard extends Component {
  constructor(props) {
    super(props);
    const randomColorRow = () => {
      return [...Array(8)].map((_, i) => ({
        color: getRandomColor(),
        order: i,
        board: 'shuffled'
      }))
    }

    const pieces2 = {
      item0: randomColorRow(),
      item1: randomColorRow(),
      item2: randomColorRow(),
      item3: randomColorRow(),
      item4: randomColorRow(),
      item5: randomColorRow(),
      item6: randomColorRow(),
      item7: randomColorRow()
    }

    this.state = {
      pieces2,
      dragOrder: {},
      drowOrder: {},
    };
  }

  handleDragOver = e => {
    e.preventDefault();
  }

  handleDragStart = (e, orderCol, orderRow) => {
    const { dragOrder } = this.state;
    this.setState({
      dragOrder: {
        ...dragOrder,
        orderCol,
        orderRow,
      }
    })
  }

  handleDrop = (e, orderCol, orderRow) => {
    const { drowOrder } = this.state;
    this.setState({
      drowOrder: {
        ...drowOrder,
        orderCol,
        orderRow,
      }
    }, () => {
      const { dragOrder, pieces2 } = this.state;
      if (drowOrder.orderRow === dragOrder.orderRow) { 
        const newRowArray = swapArrayElements(pieces2[`item${dragOrder.orderRow}`], dragOrder.orderCol, drowOrder.orderCol);
        // reset state
        this.setState({
          pieces2: {
            ...pieces2,
            [`item${dragOrder.orderRow}`]: [...newRowArray]
          },
          dragOrder: {},
          drowOrder: {},
        })
      }
    })
  }

  render() {
    // console.log('pieces1: ', this.state.pieces1);
    const { pieces2 } = this.state;

    return (
      <div className={styles.dragContainer}>
        {
          Object.keys(pieces2).map((item, index) => {
            return pieces2[item].map(i => (
              <div 
                draggable
                onDragStart={(e) => this.handleDragStart(e, i.order, index)}
                onDragOver={this.handleDragOver}
                onDrop={(e) => this.handleDrop(e, i.order, index)}
                className={styles.itemboxColor} 
                style={{ backgroundColor: `${i.color}`}}
              >
                {/* test {index} */}
              </div>
            ));
          })
        }
      </div>
    )
  }
}

export default ColorsBoard;
