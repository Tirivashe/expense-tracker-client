import { createStyles } from "@mantine/core";

export const useStyles = createStyles((_theme, { color }: { color: string }) => ({
  root: {
    background: color,
    height: "4rem",
    width: "auto",
    display: "flex",
    padding: "0.5rem 1.2rem",
    borderRadius: "5px",
  },
}));