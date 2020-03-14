import React,{Component} from 'react'

import PageHeader from '../template/PageHeader'
import TodoForm from './Form'
import TodoList from './List'

import axios from 'axios'

import Url from '../config/url'

const URL = new Url();

export default class Todo extends Component{



    constructor(props){

        super(props)

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.state = {
            description: '',
            list:[]
        }

        this.refresh()

    }

    handleRemove(todo){
        axios.delete(`${URL._TODOS}/${todo._id}`)
            .then(resp=>this.refresh(this.state.description))
    }

    refresh(description = ''){

        const search = description ? `&description__regex=/${description}/` : ''

        axios.get(`${URL._TODOS}?sort=createdAt${search}`).
            then(res=>this.setState({...this.state, description, list: res.data}))
    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    handleClear(){
        this.refresh()
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd(){

        const description = this.state.description;

        axios.post(URL._TODOS, {description})
            .then( resp => this.refresh())

    }

    handleMarkAsDone(todo){

        axios.put(`${URL._TODOS}/${todo._id}`, {...todo, done: true})
            .then(resp => this.refresh(this.state.description))

    }

    handleMarkAsPending(todo){
        axios.put(`${URL._TODOS}/${todo._id}`, {...todo, done: false})
            .then(resp => this.refresh(this.state.description))
    }

    render(){
        return(
            <div>

                <PageHeader name={"Tasks"} small={"Add"} />

                <TodoForm
                    description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                />

                <TodoList
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                />

            </div>
        )
    }

}