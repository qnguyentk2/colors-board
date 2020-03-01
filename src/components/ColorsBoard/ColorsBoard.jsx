/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-debugger */
/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import styles from './ColorsBoard.scss';

export const getRandomColor = (hue, lightness) => {
  const color = `hsl(${hue}, 100%, ${lightness}%)`;
  return color;
}

export const swapArrayElements = (arr, indexA, indexB) => {
  const temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
  return arr;
};

export const swapItemArrayInObject = (obj = {}, pointA = {}, pointB = {}, key) => {
  const itemA = `${key}${pointA.orderRow}`;
  const itemB = `${key}${pointB.orderRow}`;
  const temp = obj[itemA][pointA.orderCol];
  obj[itemA][pointA.orderCol] = obj[itemB][pointB.orderCol];
  obj[itemB][pointB.orderCol] = temp;

  return obj;
}

const randomColorRow = (hue) => {
  return [...Array(8)].map((_, i) => ({
    color: getRandomColor(hue, 90-i*10),
    order: i,
    board: 'shuffled'
  }))
}

class ColorsBoard extends Component {
  constructor(props) {
    super(props);

    const pieces2 = {
      item0: randomColorRow(0),
      item1: randomColorRow(30),
      item2: randomColorRow(61),
      item3: randomColorRow(89),
      item4: randomColorRow(117),
      item5: randomColorRow(150),
      item6: randomColorRow(180),
      item7: randomColorRow(210)
    }

    this.state = {
      pieces2,
      dragOrder: {},
      dropOrder: {},
    };
  }

  handleDragOver = (e) => {
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
    const { pieces2 } = this.state;

    return (
      <div className={styles.dragContainer}>
        {
          Object.keys(pieces2).map((item, index) => {
            return (
              <div className={styles.lineboxColor}>
                {
                  pieces2[item].map((i, idx) => (
                    <div
                      key={`${item}-${i.color}`}
                      draggable
                      onDragStart={(e) => this.handleDragStart(e, idx, index)}
                      onDragOver={this.handleDragOver}
                      onDrop={(e) => this.handleDrop(e, idx, index)}
                      className={styles.itemboxColor} 
                      style={{ backgroundColor: `${i.color}`}}
                    />
                  ))
                }
              </div>
            );
          })
        }
      </div>
    )
  }
}

export default ColorsBoard;
