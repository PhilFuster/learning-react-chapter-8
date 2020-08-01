import React from 'react';

// Render Props are properties that are rendered: This can mean components that
// are sent as properties that are rendered when specific conditions are met, or
// it can mean function properties that return components that will be rendered.
// In this case List takes a property renderEmpty which will render a component when
// the data array passed is empty or not passed at all.
function List({ data = [], renderEmpty }) {
  if (!data.length) return renderEmpty;
  return <p>{data.length} items</p>;
}

export default List;
