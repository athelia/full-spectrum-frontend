import Link from 'next/link'
import { GetStaticProps } from 'next'
import { Props as RecipeProps } from './recipe/[recipeSlug]/[id]'
import { stringToSlug } from '@/utilities'
import { loadRecipes } from '../lib/load-recipes'

export const getStaticProps: GetStaticProps = async () => {
  const recipes = await loadRecipes()

  return { props: { recipes } }
}

type Props = {
  recipes: RecipeProps[]
}

const Recipes = ( props: Props ) => {
  const { recipes } = props

  const recipeLinks = recipes.map((recipe: RecipeProps) => {
    const recipeSlug = stringToSlug(recipe.name)
    return (
      <Link 
        key={recipe.name}
        href={`/recipe/${recipeSlug}/${encodeURIComponent(recipe.id)}`}
      >
        {recipe.name}
      </Link>
    )
  })

  return (
    <>
      {recipeLinks}
    </>
  )
}

export default Recipes