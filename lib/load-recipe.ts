import { getApiHostname } from '@/utilities'

export async function loadRecipe(id: string | string[] | undefined) {
  const recipe = await fetch(`http://${getApiHostname()}/api/recipe/${id}`)
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw res
      }
    })
    .catch((err) => {
      console.log(err)
    })
  return recipe
}