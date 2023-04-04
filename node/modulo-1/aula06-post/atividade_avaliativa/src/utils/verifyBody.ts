function verifyBody(body: any): boolean {
    if (
        !body ||
        typeof body.name !== 'string' ||
        typeof body.age !== 'number' ||
        typeof body.email !== 'string' ||
        !body.profile ||
        typeof body.profile.type !== 'string' ||
        typeof body.profile.credit !== 'number' ||
        typeof body.profile.business !== 'boolean'
    ) {
        return false;
    }
    return true;
}

export default verifyBody;
