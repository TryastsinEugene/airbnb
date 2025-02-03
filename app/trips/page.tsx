import EmptyState from "../components/EmptyState";
import ClientsOnly from "../components/ClientsOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import TripClient from "./TripClient";

const TripsPage = async () => {
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

  const reservations = await getReservations({
    userId: currentUser.id
  });

  if(reservations.length === 0){
    return(
        <ClientsOnly>
            <EmptyState 
                  title="No trips found"
                  subtitle="Looks like you havent reserved any trips."  
            />
        </ClientsOnly>
    )
  }

  return (
    <ClientsOnly>
        <TripClient 
            reservations={reservations}
            currentUser={currentUser}
        />
    </ClientsOnly>
  )
}

export default TripsPage