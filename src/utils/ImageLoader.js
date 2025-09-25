const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg}', { eager: true });

const ImageMap = Object.keys(images).reduce((acc, path) => {
  const key = path.split('/').pop(); // e.g. "auth_bg_img.svg"

  // For Vite eager imports: some return { default: url }, some return url directly
  acc[key] = images[path].default || images[path];
  return acc;
}, {});

export default ImageMap;