import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import TripsClient from "./TripsClient";


const TripsPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <ClientOnly> 
                <EmptyState 
                    title="Vous n'est pas autorisé"
                    subtitle="Vous devez vous connectez"
                />
            </ClientOnly>
        )
    }

    const getReservations = async (userId: string) => {
        // Implement the logic to fetch reservations here
        // This is a placeholder implementation
        return [];
    };

    const reservations = await getReservations(currentUser.id);

    if (reservations.length === 0) {
        return (
            <>
            <ClientOnly>
                <EmptyState
                    title="Pas de voyages trouvé"
                    subtitle="Regardez vous n'avez reservé aucun voyage"
                />
            </ClientOnly>
            </>
        )
    }

    return (
        <>
        <ClientOnly>
            <TripsClient
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    
        </>
    )
}

export default TripsPage;