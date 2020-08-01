import React from 'react';

const tahoe_peaks = [
  { name: 'Freel Peak', elevation: 10891 },
  { name: 'Monument Peak', elevation: 10067 },
  { name: 'Pyramid Peak', elevation: 9983 },
  { name: 'Mt. Tallac', elevation: 9735 },
];
// This version of list takes two render properties now.
// One that will handle how an item in the list will render.
// Two that will handle Rendering when the data passed is empty.
function List({ data = [], renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

// example usage:
// passing the list of tahoe_peaks as data prop
// renderEmpty will render that paragraph element when data is empty
// and renderItem will render the name and the elevation of the peak.
/* <List
  data={tahoe_peaks}
  renderEmpty={<p>This list is empty </p>}
  renderItem={(item) => (
    <>
      {item.name} - {item.elevation.toLocaleString()}ft
    </>
  )}
></List>; */

export default List;
