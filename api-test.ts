import fetch from "cross-fetch";
import { FormData } from "node-fetch";
export function antoine(): string {
  return "hi from antoine";
}

export async function getDatafromAPI() {
  const url = "https://stablediffusionapi.com/api/sandbox/v3/fine_tune";
  const data = {
    key: `lUHfz6htjXph9Is7ZkuoIp218ZFbs1eqQRgI7MI9SuZR7ULbGR8XUZAhgYBh`,
    message: "photo of",
    adhik: "key",
    trainingName: "person",
    trainingType: "type",
  };
  await fetch(url, {
    method: "POST",
    headers: {
      "X-API-KEY":
        "lUHfz6htjXph9Is7ZkuoIp218ZFbs1eqQRgI7MI9SuZR7ULbGR8XUZAhgYBh",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
