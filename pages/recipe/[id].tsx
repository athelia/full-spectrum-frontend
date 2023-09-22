import { GetStaticPaths, GetStaticProps } from "next"
import Card from "react-bootstrap/Card"
import { getHostname } from "@/utilities"

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-external-link"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
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

  const paths = recipes.map((recipe: Props) => ({
    params: { id: recipe.id },
  }))

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