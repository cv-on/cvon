import { useMemo } from "react";

import { Box, Button, Flex, Typography, usySpacing } from "@usy-ui/base";
import Link from "next/link";

import {
  CvTemplateStyled,
  EditSectionContainerStyled,
  EditSectionStyled,
  PreviewContainerStyled,
} from "./styled";

const EditingPage = () => {
  const sections = useMemo(
    () => [
      { id: "personal-information", name: "Personal Information" },
      { id: "core-qualification", name: "Core Qualification" },
      { id: "technical-skills", name: "Technical Skills" },
      { id: "experience", name: "Experience" },
      { id: "side-projects", name: "Side Projects" },
      { id: "education", name: "Education" },
    ],
    []
  );

  const handleDownloadPDF = async () => {
    try {
      const response = await fetch("/api/generate-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("PDF generation failed");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");

      link.href = url;
      link.setAttribute("download", "generated.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <Flex justifyContent="center" alignItems="flex-start">
      <PreviewContainerStyled>
        <CvTemplateStyled />
      </PreviewContainerStyled>
      <EditSectionContainerStyled>
        <Box>
          <Typography size="large">Editing Sections</Typography>
          <Flex
            justifyContent="space-between"
            alignItems="flex-start"
            gap={usySpacing.px32}
            wrap="wrap"
            marginProps={{ marginTop: usySpacing.px20 }}
          >
            {sections.map(({ id, name }) => (
              <EditSectionStyled key={id}>
                <Typography align="center" weight="bold">
                  {name}
                </Typography>
              </EditSectionStyled>
            ))}
          </Flex>
        </Box>
        <Flex justifyContent="center" gap={usySpacing.px20}>
          <Button variant="primary" onClick={handleDownloadPDF}>
            Download
          </Button>
          <Link href="/preview" target="_blank">
            <Button variant="outline">Preview</Button>
          </Link>
        </Flex>
      </EditSectionContainerStyled>
    </Flex>
  );
};

export default EditingPage;
