import Req from './request';

export const fetchTests = data =>
  Req.GET({
    url: `/tests?page=${data.page}&per=${data.per}&sort=${data.sort}&search=${
      data.search != null ? data.search.toLowerCase() : ''
    }`,
    data,
  });

export const postTest = data =>
  Req.POST({
    url: '/tests',
    data,
  });

export const removeTest = id =>
  Req.DELETE({
    url: `/tests/${id}`,
    id,
  });

export const patchTest = (id, data) =>
  Req.PATCH({
    url: `/tests/${id}`,
    data,
  });

export const postQuestion = (data, id) =>
  Req.POST({
    url: `/tests/${id}/questions`,
    data,
  });

export const removeQuestion = id =>
  Req.DELETE({
    url: `/questions/${id}`,
    id,
  });

export const patchQuestion = data =>
  Req.PATCH({
    url: `/questions/${data.id}`,
    data,
  });

export const postAnswer = (data, id) =>
  Req.POST({
    url: `/questions/${id}/answers`,
    data,
  });

export const removeAnswer = id =>
  Req.DELETE({
    url: `/answers/${id}`,
    id,
  });

export const patchAnswer = data =>
  Req.PATCH({
    url: `/answers/${data.id}`,
    data,
  });

export const swapAnswers = (id, position) =>
  Req.PATCH({
    url: `/answers/${id}/insert_at/${position + 1}`,
  });
