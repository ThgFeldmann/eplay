import ProductList from '../../components/ProductList'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportGames, isLoading: isLoadingSports } =
    useGetSportGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRPG } = useGetRpgGamesQuery()

  return (
    <>
      <ProductList
        id="action"
        games={actionGames}
        title="Ação"
        background="black"
        isLoading={isLoadingAction}
      />
      <ProductList
        id="sports"
        games={sportGames}
        title="Esportes"
        background="gray"
        isLoading={isLoadingSports}
      />
      <ProductList
        id="simulation"
        games={simulationGames}
        title="Simulação"
        background="black"
        isLoading={isLoadingSimulation}
      />
      <ProductList
        id="fight"
        games={fightGames}
        title="Luta"
        background="gray"
        isLoading={isLoadingFight}
      />
      <ProductList
        id="rpg"
        games={rpgGames}
        title="RPG"
        background="black"
        isLoading={isLoadingRPG}
      />
    </>
  )
}

export default Categories
