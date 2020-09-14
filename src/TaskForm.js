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
            total_amount:0
        }
    }


    handleChange = (e) => {
        if (["productItem", "productPrice", "quantity", "total",].includes(e.target.name)) {
            let taskList = [...this.state.taskList]
            taskList[e.target.dataset.id][e.target.name] = e.target.value;
            taskList[e.target.dataset.id]["total"] = Number(taskList[e.target.dataset.id].productPrice) * Number(taskList[e.target.dataset.id].quantity);

            console.log('24', taskList);
            console.log('total', Number(taskList[e.target.dataset.id].productPrice) + Number(taskList[e.target.dataset.id].quantity)
            );

            let total_price = 0
            localStorage.setItem('myProduct', JSON.stringify(this.state.taskList))
            // console.log(this.state.taskList);
            const getTotal = JSON.parse(window.localStorage.getItem('myProduct')) || []
            // console.log(getTotal,'geTotal');
            getTotal.map(function (getTotal) {
                total_price += +parseFloat(getTotal.total);
                console.log('price 60', total_price);
            })
            this.setState({
                total: Number(taskList[e.target.dataset.id].productPrice) * Number(taskList[e.target.dataset.id].quantity),
                total_amount: total_price
            })
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

    }
    handleSubmit = (e) => {
        e.preventDefault();
        let total_price = 0
        localStorage.setItem('myProduct', JSON.stringify(this.state.taskList))
        // console.log(this.state.taskList);
        const getTotal = JSON.parse(window.localStorage.getItem('myProduct')) || []
        // console.log(getTotal,'geTotal');
        getTotal.map(function (getTotal) {
            total_price += +parseFloat(getTotal.total);
            console.log('price 60', total_price);
        })
        this.setState({
            total_amount:total_price
        })
    }

    clickOnDelete(record) {
        this.setState({
            taskList: this.state.taskList.filter(r => r !== record),
            rowCount: this.state.rowCount - 1,
            total_amount: this.state.total_amount-record.total
        });
   
    }

    render() {
        let { taskList } = this.state//let { notes, date, description, taskList } = this.state

        return (
            <div className="content">

                <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <div className="row" style={{ marginTop: 20 }}>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <div className="card">
                                <div className="card-header text-center"><h1>Add Your Product</h1></div>
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
                                            {taskList.map((val, idx) => {
                                                let productItem = `productItem-${idx}`, productPrice = `productPrice-${idx}`, quantity = `quantity-${idx}`, total = `total-${idx}`
                                                return (
                                                    <tr key={val.index}>

                                                        <td>
                                                            <select name="productItem" id={productItem} data-id={idx} className="form-control" >
                                                                <option value="pending">Product Item</option>
                                                                <option value="Gucci">Gucci</option>
                                                                <option value="Louis Vuitton">Louis Vuitton</option>
                                                                <option value="Mercedes-Benz">Mercedes-Benz</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <input type="text" name="productPrice" data-id={idx} id={productPrice}
                                                                className="form-control "

                                                            />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="quantity" id={quantity} data-id={idx}
                                                                className="form-control "

                                                            />
                                                        </td>

                                                        <td>{val.total}</td>

                                                        <td>
                                                            {
                                                                <button className="btn btn-danger" onClick={(() => this.clickOnDelete(val))} ><i className="fa fa-minus" aria-hidden="true"></i></button>
                                                            }
                                                        </td>
                                                    </tr >

                                                )
                                            })
                                            }
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td >
                                                    <button onClick={this.addNewRow} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
                                                </td>
                                                <td></td>
                                                <td>Total Item : {this.state.rowCount}</td>
                                                <td >Total amount: {this.state.total_amount}</td>
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