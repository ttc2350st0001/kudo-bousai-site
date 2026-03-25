import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "d0llenpy8e",
  apiKey: "GxHFkyCHGMN089hvI1n0Rp5Rve1FCXLxM6Sq",
});

export const getPost = async () => {
  const data = await client.get({
    endpoint: "test",
    contentId: "2qpi03-qc4",
  });

  return data;
};