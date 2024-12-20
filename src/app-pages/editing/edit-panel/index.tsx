"use client";
import { useState } from "react";

import { Scrollable } from "@usy-ui/base";

import { EducationSection } from "./education";
import { ExperienceSection } from "./experience";
import { OverviewSections } from "./overview";
import { PersonalInfoSection } from "./personal-info";
import { QualificationSection } from "./qualification";
import { SideProjectsSection } from "./side-projects";
import { EditPanelContainerStyled } from "./styled";
import { TechnicalSection } from "./technical";
import { DisplaySectionUnion } from "./types";

export const EditPanel = () => {
  const [displaySection, setDisplaySection] =
    useState<DisplaySectionUnion>("overview");

  const changeSection = (section: DisplaySectionUnion) => {
    setDisplaySection(section);
  };

  const renderOtherSections = () => {
    switch (displaySection) {
      case "personal-info": {
        return <PersonalInfoSection changeSection={changeSection} />;
      }

      case "qualification": {
        return <QualificationSection changeSection={changeSection} />;
      }

      case "technical": {
        return <TechnicalSection changeSection={changeSection} />;
      }

      case "experience": {
        return <ExperienceSection changeSection={changeSection} />;
      }

      case "side-projects": {
        return <SideProjectsSection changeSection={changeSection} />;
      }

      case "education": {
        return <EducationSection changeSection={changeSection} />;
      }
    }
  };

  return (
    <EditPanelContainerStyled
      $isDisplayOverview={displaySection === "overview"}
    >
      <OverviewSections changeSection={changeSection} />
      <Scrollable heightProps={{ maxHeight: "100vh" }}>
        {renderOtherSections()}
      </Scrollable>
    </EditPanelContainerStyled>
  );
};
