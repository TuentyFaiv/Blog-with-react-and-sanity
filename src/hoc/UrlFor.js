import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder({
  projectId: 'qhw7bns6',
  dataset: 'production',
  useCdn: false
});

export function urlFor(source) {
  return builder.image(source);
}