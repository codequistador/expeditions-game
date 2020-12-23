import React from 'react'
import FilterHdrIcon from '@material-ui/icons/FilterHdr'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import AcUnitIcon from '@material-ui/icons/AcUnit'
import NatureIcon from '@material-ui/icons/Nature'
import BeachAccessIcon from '@material-ui/icons/BeachAccess'

const renderIcon = (color) => {
  const icons = {
    blue: () => <FilterHdrIcon />,
    red: () => <WhatshotIcon />,
    white: () => <AcUnitIcon style={{ color: 'black' }} />,
    green: () => <NatureIcon />,
    yellow: () => <BeachAccessIcon style={{ color: 'black' }} />,
  }
  return icons[color]()
}

export default renderIcon
