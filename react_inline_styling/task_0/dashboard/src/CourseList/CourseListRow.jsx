import React from 'react';
import PropTypes from 'prop-types';

// Inline styling constants
const headerRowStyle = { backgroundColor: '#deb5b545' };
const defaultRowStyle = { backgroundColor: '#f5f5f5ab' };

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  // Determine row style
  const rowStyle = isHeader ? headerRowStyle : defaultRowStyle;

  if (isHeader) {
    return (
      <tr style={rowStyle}>
        {textSecondCell === null ? (
          <th colSpan="2">{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )}
      </tr>
    );
  }

  return (
    <tr style={rowStyle}>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  );
};

// Prop validation
CourseListRow.propTypes = {
  isHeader: PropTypes.bool.isRequired, // `isHeader` is a required boolean
  textFirstCell: PropTypes.string.isRequired, // `textFirstCell` is a required string
  textSecondCell: PropTypes.string, // `textSecondCell` is an optional string
};

// Default props
CourseListRow.defaultProps = {
  textSecondCell: null, // Default value if not passed
};

export default CourseListRow;
