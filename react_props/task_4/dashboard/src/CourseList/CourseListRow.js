import React from 'react'
import PropTypes from 'prop-types';

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string
  }
CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}

function CourseListRow({isHeader = false, textFirstCell , textSecondCell = null}){
    let ret = "";
    if (isHeader && textSecondCell  === null){
        ret = <tr><th colSpan = "2">{textFirstCell}</th></tr>
        return ret

    }
    if(isHeader && !!textSecondCell ){
        ret = <tr><th>{textFirstCell}</th>  <th>{textSecondCell}</th></tr>
        return ret
    }
    else{
        ret =<tr><td>{textFirstCell}</td> <td>{textSecondCell}</td></tr>
        return ret
    }
}


export default CourseListRow