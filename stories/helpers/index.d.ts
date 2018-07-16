import React from "react";
import { StoryDecorator } from "../../node_modules/@types/storybook__react";

export class ReduxFormProviderDecorator extends React.Component<{
  story: StoryDecorator;
}> {}

export class DemoFormDecorator extends React.Component<{
  story: StoryDecorator;
}> {}
