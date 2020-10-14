import React from 'react';
import { Link } from 'react-router-dom';
import childSupport from'../../images/childSupport.png'

const TaskDetail = ({task}) => {
  return (
    <div className="col-md-3">
       <Link style={{textDecoration: 'none'}} to={`/login`}><img style={{height: '300px', textAlign: 'center'}} src={require(`../../images/${task.pic}`)} alt=""/></Link>
      {/* <h3 style={{backgroundColor: 'orange', color: 'black', textAlign: 'center'}}>{task.name}</h3> */}
      <Link style={{textDecoration: 'none'}} to={`/login`}> <h3 style={{backgroundColor: 'orange', color: 'black', textAlign: 'center'}} >{task.name}</h3> </Link>
    </div>
  );
};

export default TaskDetail;