export async function ReadFileContent(FilePath) {
  return (await fetch(FilePath)).text();
}

export async function GetJsonFile(FileContent) {
  return JSON.parse(FileContent);
}
