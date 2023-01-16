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

  instance_prompt: string | undefined;

  class_prompt: string | undefined;

  images: [string] | undefined;

  seed: number | undefined;

  training_type: type | undefined;

  max_train_steps: string | undefined;

  webhook: string | undefined;
}

class Key {
  key: string | undefined;
}

export async function createDreamboothRequest(data: Tuning) {
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
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

  return data;
}

export async function getTrainingStatus(data: Key) {
  const url =
    "https://stablediffusionapi.com/api/sandbox/v3/fine_tune_status/dyxjeiQ6kg";

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
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

  return data;
}
