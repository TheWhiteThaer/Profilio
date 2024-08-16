export async function Translate(Element, Language, Page, Parent) {
  const Translations = ReadFileContent(
    `../../Assets/Translations/${Language}.json`
  );
  const json = JSON.parse(Translations);
  if (!Parent) {
    Element.textContent = json[Page];
    return;
  }
  Element.textContent = json[Page][Parent][Element.id];
}
