export default defineEventHandler(async (event) => {
  const { code } = event.context.params;
  const { currencyKey } = useRuntimeConfig();

  const uri = "https://api.currencyapi.com/v3/latest";

  const { data } = await $fetch(uri, {
    params: {
      currencies: code,
      apikey: currencyKey,
    },
  });

  return data;
});
