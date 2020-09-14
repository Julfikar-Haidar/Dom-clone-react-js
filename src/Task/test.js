// import React from "react"
import React, { Component } from 'react';
import TaskList from "./TaskList"
// import axios from 'axios';
// import { NotificationContainer, NotificationManager } from 'react-notifications';

class TaskForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskList: [{ index: Math.random(), productItem: "", productPrice: "", quantity: "", total: "", }],
            rowCount: 1,
            // total: 0
        }
    }


    handleChange = (e) => {
        if (["productItem", "productPrice", "quantity", "total",].includes(e.target.name)) {
            let taskList = [...this.state.taskList]
            taskList[e.target.dataset.id][e.target.name] = e.target.value;
            // taskList[e.target.dataset.id]["total"] = taskList[e.target.dataset.id].productPrice * taskList[e.target.dataset.id].quantity;
            taskList[e.target.dataset.id][e.target.total] = taskList[e.target.dataset.id].productPrice * taskList[e.target.dataset.id].quantity;

            console.log('24', taskList);
            console.log('taskList', taskList[e.target.dataset.id].productPrice);
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }
    addNewRow = (e) => {
        this.setState((prevState) => ({
            taskList: [...prevState.taskList, { index: Math.random(), index: Math.random(), productItem: "", productPrice: "", quantity: "", total: "" }],
            rowCount: this.state.rowCount + 1
        }));

    }

    deteteRow = (index) => {
        this.setState({
            taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
        });
        // const taskList1 = [...this.state.taskList];
        // taskList1.splice(index, 1);
        // this.setState({ taskList: taskList1 });
    }
    handleSubmit = (e) => {
        e.preventDefault();

    }
    clickOnDelete(record) {
        this.setState({
            taskList: this.state.taskList.filter(r => r !== record),
            rowCount: this.state.rowCount - 1
        });
    }

    render() {
        let { taskList } = this.state//let { notes, date, description, taskList } = this.state

        return (
            <div className="content">

                <form onSubmit={this.handleSubmit} >
                    <div className="row" style={{ marginTop: 20 }}>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <div className="card">
                                <div className="card-header text-center">Add Your Daily Task</div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="form-group ">
                                                <label className="required">Add New</label> <br />
                                                <button onClick={this.addNewRow} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>                                            </div>
                                        </div>

                                    </div>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="required" >Product Name</th>
                                                <th className="required" >Product Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* <TaskList add={this.addNewRow} delete={this.clickOnDelete.bind(this)} taskList={taskList} /> */}
                                            {taskList.map((val, idx) => 

                                                <tr key={val.index}>

                                                    <td>
                                                        <select name="productItem"  className="form-control" onChange={this.handleChange} >
                                                            <option value="pending">Product Item</option>
                                                            <option value="Gucci">Gucci</option>
                                                            <option value="Louis Vuitton">Louis Vuitton</option>
                                                            <option value="Mercedes-Benz">Mercedes-Benz</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <input type="text" name="productPrice" 
                                                            className="form-control "

                                                        />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="quantity" 
                                                            className="form-control "
                                                            onChange={this.handleChange}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="total" 
                                                            className="form-control "
                                                        // value={val.total}
                                                        onChange={this.handleChange}
                                                        />
                                                    </td>
                                                    {/* <td>{val.total} </td> */}
                                                    {/* <td>
            <input type="text"  name="task" id={task} data-id={idx} className="form-control "
           />
          </td> */}
                                                    {/* <td>
            <textarea  name="taskNotes" id={taskNotes} data-id={idx} className="form-control"></textarea>
          </td> */}

                                                    <td>
                                                        {
                                                            <button className="btn btn-danger" onClick={(() => this.clickOnDelete(val))} ><i className="fa fa-minus" aria-hidden="true"></i></button>
                                                        }
                                                    </td>
                                                </tr >

                                            )
                                            }
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td >
                                                    <button onClick={this.addNewRow} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
                                                </td>
                                                <td></td>
                                                <td>Total Item : {this.state.rowCount}</td>
                                                <td >Total amount: 15</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="card-footer text-center"> <button type="submit" className="btn btn-primary text-center">Submit</button></div>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
                </form>
            </div>
        )
    }
}

export default TaskForm;