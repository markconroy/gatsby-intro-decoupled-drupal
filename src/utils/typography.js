import Typography from "typography"

const typography = new Typography({
  baseFontSize: "24px",
  baseLineHeight: 1.5,
  scaleRatio: 3,
  headerWeight: 400,
  headerFontFamily: [
    "Alfa Slab One",
    "Georgia",
    "serif",
  ],
  bodyFontFamily: [
    "Roboto",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  googleFonts: [
    {
      name: 'Roboto',
      styles: [
        '300',
        '400',
        '500',
        '700',
      ],
    },
    {
      name: 'Alfa Slab One',
      styles: [
        '400',
      ],
    },
  ],
})

export default typography