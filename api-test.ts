import fetch from "cross-fetch";
export function antoine(): string {
  return "hi from antoine";
}

export async function getDatafromAPI() {
  fetch("https://stablediffusionapi.com/api/sandbox/v3/fine_tune", {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
