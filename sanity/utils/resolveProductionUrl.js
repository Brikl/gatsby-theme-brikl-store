export default function resolveProductionUrl(document) {
  return `http://localhost:3333/preview/${document._id}`;
}
