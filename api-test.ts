import fetch from "cross-fetch";
import { Headers } from "cross-fetch";
import * as process from "process";
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

function fetchData(url: RequestInfo | URL) {
  const myHeaders = new Headers();
  myHeaders.append(
    `${process.env["API_KEY_NAME "]}`,
    `${process.env["API_KEY_VALUE "]}`
  );
  myHeaders.append("Content-Type", "application/json");

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        console.log(response.statusText);
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function createDreamboothRequest(data: Tuning) {
  const url = `${process.env["BASE_URL "]}/sandbox/v3/fine_tune`;

  await fetchData(url).then((data) => {
    return data;
  });

  return data;
}

export async function getTrainingStatus(data: Key) {
  const url = `${process.env["BASE_URL "]}/sandbox/v3/fine_tune_status/dyxjeiQ6kg`;

  await fetchData(url).then((data) => {
    return data;
  });

  return data;
}

export async function cancelTraining(data: Key) {
  const url = `${process.env["BASE_URL "]}/v3/cancle_training/model_id`;

  await fetchData(url).then((data) => {
    return data;
  });

  return data;
}

export async function deleteDreamboothModel(data: Key) {
  const url = `${process.env["BASE_URL "]}/v3/finetune/delete/your_model_id`;

  await fetchData(url).then((data) => {
    return data;
  });

  return data;
}
