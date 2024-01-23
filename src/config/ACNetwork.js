import apiClient from './Evn';

export default {
  get: async (url, header, data) => {
    apiClient?.setHeaders(header);

    return await apiClient.get(url, data);
  },

  post: async (url, data, header) => {
    if (header) {
      apiClient?.setHeaders(header);
    }

    return await apiClient.post(url, data);
  },

  put: async (url, data, header) => {
    apiClient.setHeaders(header);

    return await apiClient.put(url, data);
  },

  delete: async (url, data, header) => {
    apiClient.setHeaders(header);

    return await apiClient.delete(url, data);
  },
};
