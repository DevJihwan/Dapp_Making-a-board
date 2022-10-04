import React from 'react';

const BoardListRow = ({ children }) => {
  return (
    <tr className="common-table-column">
      {
        children
      }
    </tr>
  )
}

export default BoardListRow;
