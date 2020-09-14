import React, { Component } from "react"

class TaskList extends Component {
  constructor(props){
    super(props)
    this.state = {
      sum : ''
    }
  }

  

 render(){
  return (
     this.props.taskList.map((val, idx) => {
      let  productItem = `productItem-${idx}`, productPrice = `productPrice-${idx}`,quantity = `quantity-${idx}`,total = `total-${idx}`
      return (
        <tr key={val.index}>

        <td>
            <select name="productItem" id={productItem} data-id={idx} className="form-control" onChange={this.handleChange} >
              <option value="pending">Product Item</option>
              <option value="Gucci">Gucci</option>
              <option value="Louis Vuitton">Louis Vuitton</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
            </select>
          </td>
          <td>
            <input type="text"  name="productPrice" data-id={idx} id={productPrice}
             className="form-control "
             
          />
          </td>
          <td>
            <input type="text"  name="quantity" id={quantity} data-id={idx} 
            className="form-control "
           
     />
          </td>
          {/* <td>
            <input type="text"  name="total" id={total} data-id={idx} 
            className="form-control "
            value={val.total}
            
     />
          </td> */}
          <td>{val.total} </td>
          {/* <td>
            <input type="text"  name="task" id={task} data-id={idx} className="form-control "
           />
          </td> */}
          {/* <td>
            <textarea  name="taskNotes" id={taskNotes} data-id={idx} className="form-control"></textarea>
          </td> */}
         
          <td>
            {
             <button className="btn btn-danger"  onClick={(() => this.props.delete(val))} ><i className="fa fa-minus" aria-hidden="true"></i></button>
            }
          </td>
        </tr >
        
      )
    })
  )
}
}
export default TaskList