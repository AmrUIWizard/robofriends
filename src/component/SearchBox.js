import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <input
            className="pa3 ba b--green bg-lightest-blue ma3 br3"
            type="search"
            placeholder="search robots"
            onChange={searchChange}
        />
    )
}

export default SearchBox;