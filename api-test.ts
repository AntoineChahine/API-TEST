import fetch from "node-fetch";
export function antoine(): string {
  return "hi from antoine";
}

export async function getDatafromAPI() {
  const response = await fetch(
    "https://stablediffusionapi.com/api/sandbox/v3/fine_tune"
  );
  const data = await response.json();
  console.log(data);
  return data;
}
