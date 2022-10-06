import React, { useState } from 'react';

const BoardLikeColumn = ({ children }) => {

  // console.log(" TEST1 #$%#$%#$#% "+props.value);
  // console.log(" TEST2 #$%#$%#$#% "+this.props);
  console.log(" TES3 #$%#$%#$#% "+children);
  console.log(" TES4 #$%#$%#$#% "+parseInt(children));
  console.log(" TES5 #$%#$%#$#% "+Number(children));

  let _value = children;

  console.log(" TES6 #$%#$%#$#% "+_value);

  _value = _value.replace(".","")
  console.log(" TES7 #$%#$%#$#% "+_value);

  const [value, setValue] = useState(parseInt(children));

  function clickLike(){
    setValue(value + parseInt(1));
    console.log(value+"%%%%");
  }

  return (
    <td className="common-table-column" onClick={() => clickLike()}>
      👍 {value}
    </td>
  )
}

export default BoardLikeColumn;