import fetch from "cross-fetch";
import { Headers } from "cross-fetch";

export class dataDto {
  key: string | undefined;

  message: string | undefined;

  dhikr: string | undefined;

  trainingName: string | undefined;

  trainingType: type | undefined;
}

export enum type {
  Men,
  Women,
  Cat,
  Dog,
}

export async function getDatafromAPI({
  key,
  message,
  dhikr,
  trainingName,
  trainingType,
}: dataDto) {
  const url = "https://stablediffusionapi.com/api/sandbox/v3/fine_tune";

  const myHeaders = new Headers();
  myHeaders.append(
    "418b381eee78a74fad67e1839c0163b5",
    "lUHfz6htjXph9Is7ZkuoIp218ZFbs1eqQRgI7MI9SuZR7ULbGR8XUZAhgYBh"
  );
  myHeaders.append("Content-Type", "application/json");

  const data = JSON.stringify({
    key: key,
    message: message,
    adhik: dhikr,
    trainingName: trainingName,
    trainingType: trainingType,
  });

  await fetch(url, {
    method: "POST",
    headers: myHeaders,
    body: data,
    redirect: "follow",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.error(error));
}
