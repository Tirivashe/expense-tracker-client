import { Global } from "@mantine/core";

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "Poppins",
            src: `url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');`,
            fontWeight: 400,
            fontStyle: "normal",
          },
        },
      ]}
    />
  );
}
