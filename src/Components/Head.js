import React from "react";

const Head = (props) => {
     React.useEffect(() => {
          document.title = 'React Studies | ' + props.title;
     }, [props]);

     return <></>;
};

export default Head;