import React from 'react'
import MotionDivDownToUp from '../../animation/MotionDivDownToUp'
import content from '../../../content/content'

function LogoFooter() {
  return (
    <MotionDivDownToUp>
      <div className="h-[115px] flex justify-start items-center">
        <img
          src={content.texts.navbar.logo.img}
          alt={content.texts.navbar.logo.alt}
          width="263"
          height="104"
          className="max-h-[88px] w-auto bg-bgSectionDark p-2 rounded-md"
        ></img>
      </div>
    </MotionDivDownToUp>
  )
}

export default LogoFooter
