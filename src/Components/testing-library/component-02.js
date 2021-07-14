import React, {useState} from 'react';
import Component01 from "./component-01";
import Search from "./Search/Search";

const Component02 = () => {
    const [search, setSearch] = useState('')
    const data = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Angular', 'NodeJS']
    return (
        <div>
            <Search value={search} onChange={(e) => setSearch(e.target.value)}>Find course:</Search>
          <Component01 items={data}/>
        </div>
    )
}

export default Component02