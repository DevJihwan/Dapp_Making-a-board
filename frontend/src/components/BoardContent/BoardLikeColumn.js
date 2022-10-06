import React, { useState } from 'react';
import Congrat from '../../containers/Auth/Congrat';


const BoardLikeColumn = ({ children }) => {

  const [value, setValue] = useState(0);

  function clickLike(){
    setValue(value + 1);
    console.log(value+"%%%%");
  }

  const data = parseInt(value) + Number(children[1]);

  if(data>10){
    console.log("START INIT CONTRACT");
    let _cogratComponent = new Congrat();

    _cogratComponent.componentDidMount();

  }


  return (
    <td className="common-table-column" onClick={() => clickLike()}>
      👍 {data}
    </td>
  )
}

export default BoardLikeColumn;