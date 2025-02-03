import getCurrentUser from "@/app/actions/getCurrentUser"
import { Container } from "postcss";
import getFavorites from "../actions/getFavorites";
import ClientsOnly from "../components/ClientsOnly";
import EmptyState from "../components/EmptyState";
import FavoritesClient from "./FavoritesClient";

const FavoritesPage = async () => {
    const currentUser = await getCurrentUser();
    const favorites = await getFavorites();

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

      if(favorites.length === 0){
        return(
            <ClientsOnly>
                <EmptyState 
                      title="No favorites listings"
                      subtitle="Add some favorites"  
                />
            </ClientsOnly>
        )
      }
  return (
    <ClientsOnly>
      <FavoritesClient 
        currentUser={currentUser}
        favorites={favorites}
      />
    </ClientsOnly>
  )
}

export default FavoritesPage