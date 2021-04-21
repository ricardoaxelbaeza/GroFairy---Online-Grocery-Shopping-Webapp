import React, {useState} from 'react'
import {Input} from 'antd';

const{ Search } = Input;

function SearchFeature() {

    const [SearchStores, setSearchStores] = useState("")

    const onChangeSearch = (event)=> {

        setSearchStores(event.currentTarget.value)

    }


    return(
        <div>
            <Search 
                value={SearchStores}
                onChange={onChangeSearch}
                placeholder="Search..."
            
            />
        </div>
    )
}

export default SearchFeature