import { useDispatch } from 'react-redux'
import Button from '../Button'
import { formatToBrl } from '../../utils'
import Tag from '../Tag'

import { Banner, Infos } from './styles'

import { add, open } from '../../store/reducers/cart'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>

        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {formatToBrl(game.prices.old)}</span>
            )}
            {game.prices.current && <>Por {formatToBrl(game.prices.current)}</>}
          </p>
          {game.prices.current && (
            <Button
              variant="primary"
              type="button"
              title="Clique aqui para adicionar este jogo ao carrinho"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
