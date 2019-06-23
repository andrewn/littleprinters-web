import URLSearchParams from '@ungap/url-search-params'

export default function useQueryString(queryStringParam) {
  const u = new URLSearchParams(window.location.search);
  return u.get(queryStringParam);
}
