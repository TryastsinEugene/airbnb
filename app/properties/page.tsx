import EmptyState from "../components/EmptyState";
import ClientsOnly from "../components/ClientsOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getListings from "../actions/getListings";
import PropertyClient from "./PropertyClient";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();
  
  if(!currentUser){
    return(
        <ClientsOnly>
            <EmptyState 
                  title="Unauthorized"
                  subtitle="Please login"  
            />
        </ClientsOnly>
    )
  }

  const listings = await getListings({
    userId: currentUser.id
  });

  if(listings.length === 0){
    return(
        <ClientsOnly>
            <EmptyState 
                  title="No properties found"
                  subtitle="Looks like you have no properties."  
            />
        </ClientsOnly>
    )
  }

  return (
    <ClientsOnly>
        <PropertyClient 
            listings={listings}
            currentUser={currentUser}
        />
    </ClientsOnly>
  )
}

export default PropertiesPage