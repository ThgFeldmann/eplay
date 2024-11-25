import { formatToBrl } from '../../utils'

import Loader from '../Loader'
import Product from '../Product'

import { Container, List, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games?: Game[]
  id?: string
  isLoading: boolean
}

const ProductList = ({ background, title, games, id, isLoading }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(formatToBrl(game.prices.current))
    }

    if (isLoading) {
      return <Loader />
    } else {
      return tags
    }
  }

  return (
    <Container id={id} background={background}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          {games &&
            games.map((game) => (
              <li key={game.id}>
                <Product
                  id={game.id}
                  title={game.name}
                  category={game.details.category}
                  system={game.details.system}
                  description={game.description}
                  // infos={getGameTags(game)} ocorre erro com isso
                  infos={[]}
                  image={game.media.thumbnail}
                />
              </li>
            ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList
