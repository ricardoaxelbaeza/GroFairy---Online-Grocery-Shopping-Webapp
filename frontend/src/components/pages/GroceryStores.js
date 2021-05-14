import React from 'react';
import { Grid } from '@material-ui/core'
import Store from '../Store'
import { useState, useEffect } from 'react'
import SearchBar from '../SearchBar'
import { useSnackbar } from "notistack";
import SnackbarUtils from '../SnackbarUtils.js';

const GroceryStores = (props) => {
  const [stores, setStores] = useState([]);
  const [searchText, setSearchText] = useState('');
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    SnackbarUtils.setSnackBar(enqueueSnackbar,closeSnackbar)
    fetch('http://54.151.124.251:8000/grocerystores/?format=json')
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp)
        setStores(resp)
      })

  }, )
  return (
    <>
      <div className="groceryPage">
        <SearchBar placeholder='Enter store name:' onChange={event => {setSearchText(event.target.value)}} />
        <Grid container justify='center' style={{
          backgroundColor: '#EE6590', maxWidth: '100vw', marginTop: '11vh'
        }}>
          {stores.filter((val) => {
            if (searchText === "") {
              return val
            }
            else if (val.store_name.toLowerCase().includes(searchText.toLowerCase())){
              return val
            }
            return ""
          }).map((store) => (
            <Grid item key={store.store_id} xs={12} sm={6} md={4} lg={3} style={{ border: '10px solid #EE6590' }}>
              <Store store={store} />
            </Grid>
          ))}

        </Grid>
      </div>
    </>
  )
}

export default GroceryStores;