import React from 'react'
import '../App.css'
import TextField from '@material-ui/core/TextField'

const Search = () => {
    return (
        <div>
        <TextField
          id="search"
          label="Search Logan"
          type="search"
          className="search-feild"
          margin="normal"
        />
        </div>
    )
}
export default Search