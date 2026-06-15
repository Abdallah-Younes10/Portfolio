const images = import.meta.glob<string>(
  "../../assets/person-pic/*.png",
  {
    eager: true,
    import: "default",
  }
);

export const imgs = Object.entries(images)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, img]) => img as string);