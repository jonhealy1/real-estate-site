import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                }
            }
        })
    ],
    callbacks: {
        // Invoked on successful sign in.
        async signIn({profile}) {
            //1. connect to db
            //2. check if user exists
            //3. if not, create user
            //4. return true to allow sign in
            return true;
        },
        // Session callback function 
        async session({session}) {
            //1. connect to db
            //2. get user data
            //3. return user data
            return session;
        },
    },
};
