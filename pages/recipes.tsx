import Link from 'next/link'
import { GetStaticProps } from 'next'
import { Props as RecipeProps } from './recipe/[id]'
import { getHostname } from '@/utilities'

export const getStaticProps: GetStaticProps = async () => {
  const recipes = await fetch(`http://${getHostname()}/api/recipes`)
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

  return { props: { recipes } }
}

type Props = {
  recipes: RecipeProps[]
}

const Recipes = ( props: Props ) => {
  const { recipes } = props

  const recipeLinks = recipes.map((recipe: RecipeProps) => (
    <Link 
      key={recipe.name}
      href={`/recipe/${encodeURIComponent(recipe.id)}`}
    >
      {recipe.name}
    </Link>)
  )

  return (
    <>
      {recipeLinks}
    </>
  )
}

export default Recipes