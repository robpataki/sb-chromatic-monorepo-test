import React from "react";
import { Meta } from "@storybook/react";
import GenericHTML, { GenericHTMLProps } from "./GenericHTML";
import "./GenericHTML.module.scss";

const meta: Meta<typeof GenericHTML> = {
  title: "Components/GenericHTML",
  component: GenericHTML,
  parameters: {},
  args: {},
  argTypes: {},
};

const defaultStyling = `
<div>
  <div>
    <h1>Heading1</h1>
    <h2>Heading2</h2>
    <h3>Heading3</h3>
    <h4>Heading4</h4>
    <h5>Heading5</h5>
    <h6>Heading6</h6>
  </div>
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel libero
      nibh. In sit amet posuere mauris. Nullam id lorem faucibus ex lacinia
      blandit. Integer aliquam odio at mi venenatis, vitae placerat turpis
      placerat. Aenean nec risus ullamcorper, tempor diam non, bibendum orci.
      Cras dolor risus, laoreet at scelerisque in, pulvinar sit amet odio. Nulla
      eleifend risus tristique nunc porta blandit.
    </p>
    <span
      >Link1
      <a
        href="~/link.aspx?_id=A51AB6E58BCA451793CE9948B7C49C41&amp;_z=z"
        target="_blank"
        >Anchor</a
      >.</span
    >
  </div>
  <div>
    <p>
      <span
        >Link2
        <a
          href="~/link.aspx?_id=A51AB6E58BCA451793CE9948B7C49C41&amp;_z=z"
          target="_blank"
          >Anchor</a
        >.</span
      >
    </p>
    <p><strong>Here is some bold text</strong></p>
    <ul>
      <li>Unordered List1</li>
      <li>Unordered List2</li>
      <li>Unordered List3</li>
    </ul>
    <ol>
      <li>Ordered List1</li>
      <li>Ordered List2</li>
      <li>Ordered List3</li>
    </ol>
  </div>
</div>`;

const inlineStyling = `
<div style="padding: 16px 13px; margin-bottom: 4px">
  <div style="padding: 8px 6px; margin-bottom: 4px">
    <h1 style="font-size: 16px; color: blue;">Heading1</h1>
    <h2 style="font-size: 14px; color: red;">Heading2</h2>
    <h3 style="font-size: 13px; color: green;">Heading3</h3>
    <h4 style="font-size: 11px; color: blue;">Heading4</h4>
    <h5 style="font-size: 10px; color: grey;">Heading5</h5>
    <h6 style="font-size: 10px; color: purple;">Heading6</h6>
  </div>
  <div style="padding: 8px 6px; margin-bottom: 4px">
    <p style="font-size: 13px">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel libero
      nibh. In sit amet posuere mauris. Nullam id lorem faucibus ex lacinia
      blandit. Integer aliquam odio at mi venenatis, vitae placerat turpis
      placerat. Aenean nec risus ullamcorper, tempor diam non, bibendum orci.
      Cras dolor risus, laoreet at scelerisque in, pulvinar sit amet odio. Nulla
      eleifend risus tristique nunc porta blandit.
    </p>
    <span style="font-size: 10px"
      >Link1
      <a
        style="color: green"
        href="~/link.aspx?_id=A51AB6E58BCA451793CE9948B7C49C41&amp;_z=z"
        target="_blank"
        >Anchor</a
      >.</span
    >
  </div>
  <p>
    <span style="font-size: 14px; margin-left:5px;"
      >Link2
      <a
        style="color: green"
        href="~/link.aspx?_id=A51AB6E58BCA451793CE9948B7C49C41&amp;_z=z"
        target="_blank"
        >Anchor</a
      >.</span
    >
  </p>
  <p><strong>Here is some bold text</strong></p>
  <div style="padding: 8px 6px; margin-bottom: 4px">
    <ul font-size: 10px; margin: 5px">
      <li>Unordered List1</li>
      <li>Unordered List2</li>
      <li>Unordered List3</li>
    </ul>
    <ol style="font-size: 10px; margin: 5px">
      <li>Ordered List1</li>
      <li>Ordered List2</li>
      <li>Ordered List3</li>
    </ol>
  </div>
</div>`;

export default meta;

export const DefaultStylingStory = (args: GenericHTMLProps) => (
  <GenericHTML {...args} />
);
DefaultStylingStory.args = {
  htmlContent: {
    value: defaultStyling,
  },
};
DefaultStylingStory.storyName = "Default styling";

export const InlineStylingStory = (args: GenericHTMLProps) => (
  <GenericHTML {...args} />
);
InlineStylingStory.args = {
  htmlContent: {
    value: inlineStyling,
  },
};
InlineStylingStory.storyName = "Inline styling";
