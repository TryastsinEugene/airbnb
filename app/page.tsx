import Image from "next/image";
import ClientsOnly from "./components/ClientsOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";

import getLisitings, { IListingParams } from "./actions/getListings";
import ListingCard from "./components/listings/ListingCard";
import getCurrentUser from "./actions/getCurrentUser";

interface HomeProps{
  searchParams: IListingParams;
}

const Home = async (
  {searchParams}: HomeProps
) => {
  const listings = await getLisitings(searchParams);
  const currentUser = await getCurrentUser();

  if(listings.length === 0){
    return(
      <ClientsOnly>
        <EmptyState 
          showReset
        />
      </ClientsOnly>
    )
  }

  
  return (
    <ClientsOnly>
      <Container>
        <div
          className="
            pt-24
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
        >
         {listings.map((listing: any) => {
          return(
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          )
         })}
        </div>
      </Container>
    </ClientsOnly>
  )
}

export default Home;
