import React from 'react';

const PostSelect = ({options, defaultValue, value, onChange}) => {
  return (
    <select 
    value={value}
    onChange = {event => onChange(event.target.value)}
    >
      <option disabled selected value="">{defaultValue}</option>
      {options.map(option => 
      <option key={option.value} value={option.value}>
        {option.text}
        </option>
      )}
    </select>
  );
};

export default PostSelect;