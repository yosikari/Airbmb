import { getServerSession } from 'next-auth/next'

import { authOptions } from '@/pages/api/auth/[...nextauth]'
import prisma from '@/app/libs/prismadb'

export async function getSession() {
    return await getServerSession(authOptions)
}

export default async function getCurrentUser() {
    try {
        const session = await getSession()
        if (!session?.user?.email) return null

        const currUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        })
        if (!currUser) return null
        //if it all pass
        return {
            ...currUser,
            createdAt: currUser.createdAt.toISOString(),
            updatedAt: currUser.updatedAt.toISOString(),
            emailVerified: currUser.emailVerified?.toISOString() || null
        }
    }
    catch (err: any) {
        return null
    }
}