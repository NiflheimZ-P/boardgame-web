export type accountData = {
    users_id: number,
    username?: string,
    role?: string,
    email?: string,
    password?: string,
    created_at?: Date,
    token?: string
    picture?: string,
    first_name?: string,
    last_name?: string,
    phone?: string,
    booked?: boolean
}

export type userInfo = {
    user_id: number,
    username: string,
    profile: string,
    role: string
}