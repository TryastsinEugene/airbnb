
import EmptyState from "../components/EmptyState";
import ClientsOnly from "../components/ClientsOnly";
import ReservationsClient from "./ReservationsClient";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";

const ReservationsPage = async () => {
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
    authorId: currentUser.id
  });

  if(reservations.length === 0){
    return(
        <ClientsOnly>
            <EmptyState 
                  title="No reservations found"
                  subtitle="Looks like you have no reservations on your properties."  
            />
        </ClientsOnly>
    )
  }
  return (
    <ClientsOnly>
        <ReservationsClient 
            reservations={reservations}
            currentUser={currentUser}
        />
    </ClientsOnly>
  )
}

export default ReservationsPage