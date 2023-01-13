import fetch from "cross-fetch";
export function antoine(): string {
  return "hi from antoine";
}

export async function getDatafromAPI() {
  const url = "https://stablediffusionapi.com/api/sandbox/v3/fine_tune";
  fetch(url, {
    method: "POST",
    headers: {
      "X-Auth-Token":
        "lUHfz6htjXph9Is7ZkuoIp218ZFbs1eqQRgI7MI9SuZR7ULbGR8XUZAhgYBh",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
