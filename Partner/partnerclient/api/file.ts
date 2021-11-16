import axios from "axios";

const fileApi = {
  upload: (formFile: FormData) =>
    axios.post<string>(`${process.env.NEXT_PUBLIC_API_BASE}/files`, formFile, {
      headers: { "content-type": "multipart/form-data" },
    }),
  remove: (objectKey: string) =>
    axios.delete(`${process.env.NEXT_PUBLIC_API_BASE}/files/${objectKey}`),
};

export default fileApi;
