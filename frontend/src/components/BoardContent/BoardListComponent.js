import React from 'react';
import './BoardListComponent.css';

const BoardListComponent = props => {
  const { headersName, children } = props;

  return (
    <table className="common-table">
      <thead>
        <tr>
          {
            headersName.map((item, index) => {
              return (
                <th className="common-table-header-column" key={index}>{ item }</th>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
          {
            children
          }
      </tbody>
    </table>
  )
}

export default BoardListComponent;