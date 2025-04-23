import React from "react";
import { RichText, RichTextField } from "@sitecore-jss/sitecore-jss-nextjs";
import styles from "./GenericHTML.module.scss";
import { BaseComponent } from "@/shared/types";

export interface GenericHTMLProps extends BaseComponent {
  htmlContent: RichTextField;
  optionalClass?: string;
}

const GenericHTML = (props: GenericHTMLProps) => {
  const { id, dataCy, optionalClass, htmlContent } = props;
  return (
    <div
      id={id}
      data-cy={dataCy}
      className={`${optionalClass ? optionalClass + " " : ""}${styles.content}`}
    >
      <RichText field={htmlContent} />
    </div>
  );
};

export default GenericHTML;
