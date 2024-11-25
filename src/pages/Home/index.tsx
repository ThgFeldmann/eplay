import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductList
          id="on-sale"
          games={onSaleGames}
          title="Promoções"
          background="gray"
          isLoading={isLoadingSale}
        />
        <ProductList
          id="coming-soon"
          games={soonGames}
          title="Em breve"
          background="black"
          isLoading={isLoadingSoon}
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
