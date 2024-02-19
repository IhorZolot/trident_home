import React from 'react';

export const SortItemData = ({ onChange, styleButton, item, options, value }) => {
  return (
    <form >
      <select className={styleButton} onChange={onChange} value={value}>
        <option value=''>{item}</option>
        {options.map((option, id) => (
          <option key={id} value={option}>
            {`${option}`}
          </option>
        ))}
      </select>
    </form>
  );
}
