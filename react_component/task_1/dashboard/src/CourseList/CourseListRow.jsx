import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  if (isHeader) {
    return (
      <tr>
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
    <tr>
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
