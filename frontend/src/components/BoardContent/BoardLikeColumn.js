import React, { useState } from 'react';

const BoardLikeColumn = ({ children }) => {

  // console.log(" TEST1 #$%#$%#$#% "+props.value);
  // console.log(" TEST2 #$%#$%#$#% "+this.props);
  console.log(" TES3 #$%#$%#$#% "+children);
  // console.log(" TES4 #$%#$%#$#% "+parseInt(children));
  // console.log(" TES5 #$%#$%#$#% "+Number(children));

  const [value, setValue] = useState(0);

  function clickLike(){
    setValue(value + 1);
    console.log(value+"%%%%");
  }

  const data = parseInt(value) + Number(children[1]);

  console.log(" TES5 #$%#$%#$#% "+data);

  return (
    <td className="common-table-column" onClick={() => clickLike()}>
      👍 {data}
    </td>
  )
}

export default BoardLikeColumn;