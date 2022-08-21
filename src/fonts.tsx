import { Global } from "@mantine/core";

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "Nunito",
            src: `url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');`,
            fontWeight: 400,
            fontStyle: "normal",
          },
        },
      ]}
    />
  );
}
