function getQuantityClients(clients: any): number {
    let quantityClients = clients.length;
    if (quantityClients === 0) {
        return 1;
    }
    return ++quantityClients;
}

export default getQuantityClients;
