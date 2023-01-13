import fetch from "cross-fetch";
export function antoine(): string {
  return "hi from antoine";
}

export async function getDatafromAPI() {
  const url = "https://stablediffusionapi.com/api/sandbox/v3/fine_tune";
  fetch(url, {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
