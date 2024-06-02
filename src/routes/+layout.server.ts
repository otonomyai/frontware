/** @type {import('./$types').PageServerLoad} */
export async function load({ locals: { session } }: any) {
  return {
    session,
  };
}
