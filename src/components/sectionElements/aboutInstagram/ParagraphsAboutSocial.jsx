import Paragraphs from "../Paragraphs";
import React, { useState } from "react";
import content from "../../../content/content";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import { useTranslation } from "react-i18next";

function ParagraphsAboutSocial({ colorMode }) {
  const { t } = useTranslation();

  const textClasses = {
    dark: "text-white",
    light: "text-secondary",
    default: "text-white",
  };
  const textColor = textClasses[colorMode] || textClasses.default;

  return (
    <MotionDivDownToUp>
      <Paragraphs className={`${textColor} text-opacity-80 mb-[48px]`}>
        {t("about.aboutSocial.paragraph")}{" "}
      </Paragraphs>
    </MotionDivDownToUp>
  );
}

export default ParagraphsAboutSocial;
