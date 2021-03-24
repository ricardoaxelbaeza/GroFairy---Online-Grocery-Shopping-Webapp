import axios from 'axios';
import React, { Component } from 'react'
import '../App.css'
import { Button } from './Button'
import './GroceryStores.css'

const api = axios.create({
    baseURL: `http://localhost:8000/grocerystores`
})

class GroceryStores extends Component {

    state = {
        grocerystores: []
    }

    constructor() {
        super();
        api.get('/').then(res => {
            console.log(res.data)
        })
    }

    createStore = async () => {
        api.post('/', { title:"Test", id:4, author: 'test'})
    }

    render() {
         
    }
}