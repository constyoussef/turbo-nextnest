export async function fetchGraphQL(query: string, variables = {}) {
  const res = await fetch(`${process.env.API_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const result = await res.json();

  if (result.errors) {
    console.error("GraphQL Error:", { errors: result.errors });
    throw new Error("Failed to fetch data");
  }

  return result.data;
}
