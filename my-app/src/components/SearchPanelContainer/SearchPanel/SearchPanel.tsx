import React from 'react';
import style from './SearchPanel.module.css';
import searchImage from './img/search.png'

const SearchPanel = ({inputs, set, startSearch}) => {
  return (
    <div className={style.panel}>
      {
        Object.keys(inputs).map((item, i) => <input 
            key={i} 
            placeholder={item} 
            onInput={({target: {value}}: any) => set[item](value)} 
            value={inputs.item} 
          />
        )
      }

      <button className={style.panelSearch} onClick={startSearch}>SEARCH <img src={searchImage} alt="search-icon"/></button>
    </div>
  )
}

export default SearchPanel;