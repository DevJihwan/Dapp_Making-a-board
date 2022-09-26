import React from 'react';

const BoardListColumn = ({ children }) => {
  return (
    <td className="common-table-column">
      {
        children
      }
    </td>
  )
}

export default BoardListColumn;