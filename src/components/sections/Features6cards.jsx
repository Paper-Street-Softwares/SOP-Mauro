import { useTranslation, Trans } from "react-i18next";
import content from "../../content/content";
import IconFeatureCard from "../cards/IconFeatureCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import { Dialog } from "primereact/dialog";
import { X } from "lucide-react";
import Button from "../interactives/Button";
import { useState } from "react";

export default function Features6cards({ colorMode }) {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const openModal = (cardNum) => {
    const card = content.texts.features[`card${cardNum}`];
    setModalTitle(t(`features.card${cardNum}.title`));

    setModalContent(
      <div className="text-paragraph3">
        <div
          dangerouslySetInnerHTML={{
            __html: t(`features.card${cardNum}.description`),
          }}
        />
      </div>
    );

    setVisible(true);
  };

  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "squares",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-secondary",
    default: "text-black",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  const cardNumbers = [1, 2, 3, 4, 5, 6];

  // Função para renderizar título, usando Trans para o card6
  const renderTitle = (i) => {
    if (i === 6) {
      return (
        <Trans i18nKey={`features.card${i}.title`} components={{ i: <i /> }} />
      );
    }
    return t(`features.card${i}.title`);
  };

  return (
    <SectionArea id="service" className={`${bgClass}`}>
      <SectionHeader
        className={`text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px] ${textClass}`}
        miniTitle={t("features.miniTag")}
        sectionHeaderTitle={t("features.title")}
        sectionHeaderSubtitle={t("features.subtitle")}
        titleColorSet={textClass}
        subtitleColorSet={textClass}
      />

      <SectionWrapper>
        <div className="flex flex-col items-center w-full justify-evenly tablet1:flex-row">
          <div className="col1 desktop1:w-[28%] flex flex-col items-center">
            {cardNumbers.slice(0, 3).map((i) => (
              <MotionDivDownToUp key={i}>
                <IconFeatureCard
                  icon={content.texts.features[`card${i}`].icon}
                  title={renderTitle(i)}
                  paragraph={t(`features.card${i}.subtitle`)}
                  colorMode={colorMode}
                >
                  {i === 1 ? (
                    <Button
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-corner-down-right"
                        >
                          <path d="m15 10 5 5-5 5" />
                          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                        </svg>
                      }
                      size="small"
                      className="bg-darker"
                      labelColor="text-white"
                      label={t("features.card1.buttonLabel")}
                      onClick={() => openModal(1)}
                    />
                  ) : undefined}
                  {i === 2 ? (
                    <Button
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-corner-down-right"
                        >
                          <path d="m15 10 5 5-5 5" />
                          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                        </svg>
                      }
                      size="small"
                      className="bg-darker"
                      labelColor="text-white"
                      label={t("features.card1.buttonLabel")}
                      onClick={() => openModal(2)}
                    />
                  ) : undefined}
                </IconFeatureCard>
              </MotionDivDownToUp>
            ))}
          </div>

          <MotionDivDownToUp className="hidden desktop1:flex justify-center w-[32%]">
            <img
              src={content.texts.features.imgFeatures}
              alt={content.texts.features.alt}
              className="hidden desktop1:flex h-[900px] w-full rounded-2xl shadow-custom-opacity shadow-primary/10 object-cover"
            />
          </MotionDivDownToUp>

          <div className="col3 desktop1:w-[28%] flex flex-col items-center">
            {cardNumbers.slice(3, 6).map((i) => (
              <MotionDivDownToUp
                key={i}
                className={
                  i === 4
                    ? "flex items-center w-full tablet1:w-[290px] desktop1:w-[250px]"
                    : undefined
                }
              >
                <IconFeatureCard
                  icon={content.texts.features[`card${i}`].icon}
                  title={renderTitle(i)}
                  paragraph={t(`features.card${i}.subtitle`)}
                  className={
                    i === 4 ? "tablet1:mb-[26px] desktop1:mb-0" : undefined
                  }
                  colorMode={colorMode}
                />
              </MotionDivDownToUp>
            ))}
          </div>
        </div>
      </SectionWrapper>
      <Dialog
        className="font-secondFont"
        closeIcon={<X size={20} />}
        header={
          <div className="w-full border-b border-gray-300 pb-2">
            <span dangerouslySetInnerHTML={{ __html: modalTitle }} />
          </div>
        }
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "300px", "1024px": "300px", "641px": "300px" }}
      >
        {modalContent}
      </Dialog>
    </SectionArea>
  );
}
