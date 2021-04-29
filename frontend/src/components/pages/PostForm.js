import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    async postData() {
        try {
            let result = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'post'
            });
        } catch(e) {
            console.log(e)
        }
    }

    render() {
        
    }
}

export default PostForm