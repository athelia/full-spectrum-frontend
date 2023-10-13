import { GetStaticPaths, GetStaticProps } from "next"
import Card from "react-bootstrap/Card"
import { getHostname, stringToSlug } from "@/utilities"
import ExternalLinkSvg from "@/components/ExternalLinkSvg"

export type Props = {
  created_at: string
  edited_at: string
  id: string
  ingredients: {
    abstract_ingredient_id: string
    id: string
    name: string
    quantity: number
    recipe_id: string
    units: string
  }[]
  instructions: string
  name: string
  servings: number
  source: string
}

const Recipe = (props: Props) => {
  const { ingredients, instructions, name, servings, source } = props
  const url = new URL(source)
  return (
    <Card>
      <Card.Header>
        <Card.Title>{name}</Card.Title>
        <Card.Link
          href={source}
          target="_blank"
          style={{ display: "block" }}
        >
          {url.hostname}
          <ExternalLinkSvg />
        </Card.Link>
        {`${servings} servings `}
      </Card.Header>
      <Card.Body>
        <Card.Subtitle>Ingredients</Card.Subtitle>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient.name}>
              {`${ingredient.quantity} ${ingredient.units} ${ingredient.name}`}
            </li>
          ))}
        </ul>
        <Card.Subtitle>Instructions</Card.Subtitle>
        <Card.Text className="instructions">{instructions}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const recipes = await fetch(`http://${getHostname()}/api/recipes`)
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

  const paths = recipes.map((recipe: Props) => {
    const recipeSlug = stringToSlug(recipe.name)
    return { params: { recipeSlug: recipeSlug, id: recipe.id }}
  })

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const recipe = await fetch(`http://${getHostname()}/api/recipe/${params?.id}`)
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

  return { props: recipe }
}

export default Recipe