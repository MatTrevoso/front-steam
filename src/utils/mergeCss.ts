export function mergeStyle(...styles: string[]) {
  return styles
    .map((style) => {
      return style + " ";
    })
    .join("");
}
