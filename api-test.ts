import fetch from "cross-fetch";
import { Headers } from "cross-fetch";
export function antoine(): string {
  return "hi from antoine";
}

export async function getDatafromAPI() {
  const url = "https://stablediffusionapi.com/api/sandbox/v3/fine_tune";
  const myHeaders = new Headers();
  myHeaders.append(
    "418b381eee78a74fad67e1839c0163b5",
    "lUHfz6htjXph9Is7ZkuoIp218ZFbs1eqQRgI7MI9SuZR7ULbGR8XUZAhgYBh"
  );
  myHeaders.append("Content-Type", "application/json");

  const data = JSON.stringify({
    key: "lUHfz6htjXph9Is7ZkuoIp218ZFbs1eqQRgI7MI9SuZR7ULbGR8XUZAhgYBh",
    message: "photo of",
    adhik: "key",
    trainingName: "person",
    trainingType: "type",
  });

  await fetch(url, {
    method: "POST",
    headers: myHeaders,
    body: data,
    redirect: "follow",
  })
    .then((response) => {
      return response;
    })
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}
