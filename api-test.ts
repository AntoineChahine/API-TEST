import fetch from "cross-fetch";
import { Headers } from "cross-fetch";
export enum type {
  Men,
  Women,
  Cat,
  Dog,
}
class Tuning {
  key: string | undefined;

  publicKey: string | undefined;

  message: string | undefined;

  images: [string] | undefined;

  trainingName: string | undefined;

  trainingType: type | undefined;
}

export async function getDatafromAPI(data: Tuning) {
  const url = "https://stablediffusionapi.com/api/sandbox/v3/fine_tune";

  const myHeaders = new Headers();
  myHeaders.append(
    "418b381eee78a74fad67e1839c0163b5",
    "lUHfz6htjXph9Is7ZkuoIp218ZFbs1eqQRgI7MI9SuZR7ULbGR8XUZAhgYBh"
  );
  myHeaders.append("Content-Type", "application/json");

  await fetch(url, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: "follow",
  })
    .then((response) => console.log(response))
    .catch((error) => console.error(error));

  return data;
}
