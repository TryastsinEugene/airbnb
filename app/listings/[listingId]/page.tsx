import getCurrentUser from '@/app/actions/getCurrentUser';
import getListingById from '@/app/actions/getListingById'
import getReservations from '@/app/actions/getReservations';
import ClientsOnly from '@/app/components/ClientsOnly';
import EmptyState from '@/app/components/EmptyState';
import React from 'react'
import ListingClient from './ListingClient';

interface IParams{
    listingId?: string;
}
const ListingPage = async ({params} : { params : IParams}) => {
    const listing = await getListingById(params);
    const reservations = await getReservations(params);
    const currentUser = await getCurrentUser();
    
    if(!listing){
        return(
            <ClientsOnly>
                <EmptyState />
            </ClientsOnly>
        )
    }
  return (
    <ClientsOnly>
        <ListingClient 
            listing={listing}
            reservations={reservations}
            currentUser={currentUser}
        />
    </ClientsOnly>
  )
}

export default ListingPage