import React from "react";
import { useSelector } from 'react-redux';

const Loader = (props) => {
    const loader = useSelector(state => state.loading);
    return (
<>
 {loader && <div className="loader"><h2>loading...</h2></div>}
</>
    )
}

export default Loader;