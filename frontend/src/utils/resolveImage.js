/**
 * Resolve an image from API: full URL, /assets/ path, or local filename key.
 */
export function resolveImage(imageRef, imageMap = {}, fallback = null) {
  if (!imageRef) return fallback;
  if (imageRef.startsWith('http://') || imageRef.startsWith('https://')) {
    return imageRef;
  }

  const filename = imageRef.split('/').pop();
  return imageMap[filename] || imageMap[imageRef] || fallback;
}
