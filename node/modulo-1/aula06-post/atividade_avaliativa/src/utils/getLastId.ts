function getLastId(clients: any): number {
    let item = clients[clients.length - 1];
    if (item) {
        return item.id + 1;
    }
    return 1;
}

export default getLastId;
