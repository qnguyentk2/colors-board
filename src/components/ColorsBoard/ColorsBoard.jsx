/* eslint-disable react/jsx-one-expression-per-line */
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

const swapItemArrayInObject = (obj, pointA, pointB, key) => {
  const itemA = `${key}${pointA.orderRow}`;
  const itemB = `${key}${pointB.orderRow}`;
  const temp = obj[itemA][pointA.orderCol];
  obj[itemA][pointA.orderCol] = obj[itemB][pointB.orderCol];
  obj[itemB][pointB.orderCol] = temp;

  return obj;
}

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
      dropOrder: {},
    };
  }

  handleDragOver = e => {
    e.preventDefault();
  }

  handleDragStart = (e, idxCol, idxRow) => {
    const { dragOrder } = this.state;
    this.setState({
      dragOrder: {
        ...dragOrder,
        orderCol: idxCol,
        orderRow: idxRow,
      }
    })
  }

  handleDrop = (e, idxCol, idxRow) => {
    const { dropOrder } = this.state;
    this.setState({
      dropOrder: {
        ...dropOrder,
        orderCol: idxCol,
        orderRow: idxRow,
      }
    }, () => {
      const { dragOrder, pieces2 } = this.state;
      if (idxRow === dragOrder.orderRow) { 
        const newRowArray = swapArrayElements(pieces2[`item${dragOrder.orderRow}`], dragOrder.orderCol, idxCol);
        // reset state
        this.setState({
          pieces2: {
            ...pieces2,
            [`item${dragOrder.orderRow}`]: [...newRowArray]
          },
          dragOrder: {},
          dropOrder: {},
        })
      } else {
        const newPieces2 = swapItemArrayInObject(pieces2, dragOrder, this.state.dropOrder, 'item');
        this.setState({
          pieces2: {
            ...pieces2,
            ...newPieces2,
          },
          dragOrder: {},
          dropOrder: {},
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
            return pieces2[item].map((i, idx) => (
              <div 
                draggable
                onDragStart={(e) => this.handleDragStart(e, idx, index)}
                onDragOver={this.handleDragOver}
                onDrop={(e) => this.handleDrop(e, idx, index)}
                className={styles.itemboxColor} 
                style={{ backgroundColor: `${i.color}`}}
              >
                {index}, {idx}
              </div>
            ));
          })
        }
      </div>
    )
  }
}

export default ColorsBoard;
