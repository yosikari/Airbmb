import getCurrentUser from "./actions/get-current-user"
import getListings, {IListingsParams} from "./actions/get-listings"
import ClientOnly from "./components/client-only"
import Container from "./components/container"
import EmptyState from "./components/empty-state"
import ListingCard from "./components/listings/listing-card"

interface HomeProps{
  searchParams: IListingsParams
}

const Home = async ( {searchParams}: HomeProps ) => {
  const listings = await getListings(searchParams)
  const currentUser = await getCurrentUser()

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    )
  }

  return <ClientOnly>
    <Container>
      <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((listing) => <ListingCard
          currentUser={currentUser}
          key={listing.id}
          data={listing}
        />)}
      </div>
    </Container>
  </ClientOnly>
}

export default Home