import { getApiHostname } from '@/utilities'

export async function loadRecipes() {
  const recipes = await fetch(`http://${getApiHostname()}/api/recipes`)
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw res
      }
    })
    .catch((err) => {
      console.log(err)
  })
  return recipes
}