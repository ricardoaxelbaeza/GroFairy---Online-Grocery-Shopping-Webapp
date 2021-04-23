import React from 'react';
import { Grid } from '@material-ui/core'
import Store from '../Store'
import { useState, useEffect } from 'react'
import SearchFeature from './SearchFeature'

const GroceryStores = (props) => {
  const [stores, setStores] = useState([])

  useEffect(() => {
    fetch('http://54.151.124.251:8000/grocerystores/?format=json')
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp)
        setStores(resp)
      })

  }, [])
  return (
    <>
      <div style={{ position: 'fixed', marginRight: '25vw', marginLeft: '25vw', marginTop: '10vh', width: '50vw' }}>
        <SearchFeature

        />
      </div>

      <Grid container justify='center' style={{
        backgroundColor: '#EE6590', maxWidth: '100vw', marginTop: '11vh'
      }}>
        {stores.map((store) => (
          <Grid item key={store.id} xs={12} sm={6} md={4} lg={3} style={{ border: '10px solid #EE6590' }}>
            <Store store={store} />
          </Grid>
        ))}

      </Grid>
    </>
  )
}

export default GroceryStores;