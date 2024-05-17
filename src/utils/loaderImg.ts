export const loadImage = async (imageName: string) => {
  try {
    const image = await import(`../asset/image/menu/${imageName}`);
    return image.default;
  } catch (error) {
    console.error("Görsel yüklenemedi:", error);
    return null;
  }
};
