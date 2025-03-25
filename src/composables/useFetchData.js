import { ref } from 'vue';

export function useFetchData() {
  const isLoading = ref(false);
  const error = ref(null);

  const fetchData = async (url) => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} - ${response.statusText}`);
      }
      return await response.json();
    } catch (err) {
      console.error('Fetch Error:', err);
      error.value = err.message;
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  return { fetchData, isLoading, error };
}
