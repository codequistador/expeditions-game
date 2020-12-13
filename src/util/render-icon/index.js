import React from 'react'
import FilterHdrIcon from '@material-ui/icons/FilterHdr'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import AcUnitIcon from '@material-ui/icons/AcUnit'
import NatureIcon from '@material-ui/icons/Nature'
import BeachAccessIcon from '@material-ui/icons/BeachAccess'

const renderIcon = (color) => {
  switch (color) {
    case 'blue':
      return <FilterHdrIcon />
    case 'red':
      return <WhatshotIcon />
    case 'white':
      return <AcUnitIcon style={{ color: 'black' }} />
    case 'green':
      return <NatureIcon />
    case 'yellow':
      return <BeachAccessIcon style={{ color: 'black' }} />
    default:
      return
  }
}

export default renderIcon
