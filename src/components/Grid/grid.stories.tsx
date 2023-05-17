import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from ".";
import styled from "styled-components";

const meta = {
  title: "Grid",
  component: Grid,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

const Box = styled.div`
  height: 200px;
  background-color: indigo;
`;

export const Default: React.FC = () => {
  return (
    <Grid>
      <Box />
      <Box />
      <Box />
      <Box />

      <Box />
      <Box />
      <Box />
      <Box />
    </Grid>
  );
};
