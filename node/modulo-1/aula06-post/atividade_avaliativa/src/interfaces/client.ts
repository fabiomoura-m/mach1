interface clientProfile {
    type: string;
    credit: number;
    business: boolean;
}

export interface IClient {
    id: string;
    name: string;
    age: number;
    email: string;
    profile: clientProfile;
}
