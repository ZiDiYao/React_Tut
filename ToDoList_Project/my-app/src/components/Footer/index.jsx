import React, {Component} from 'react'
import './index.css';


export default class Footer extends Component{

    render() {

        return(
            <div className = "todo-footer">
                <label>
                    <input type="checkbox"/>
                </label>
                <span>
                    <span>已经完成 0 </span>
                </span>
                <button className='btn'>清除已经完成的任务</button>
            </div>
        )
    }


}