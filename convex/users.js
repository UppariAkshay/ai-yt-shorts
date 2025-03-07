import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const CreateNewUser = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        pictureURL: v.string()
    },
    handler: async (ctx,args) => {
        // If user already exists
        const user = await ctx.db.query('users')
        .filter(q => q.eq(q.field('email'), args.email)).collect()

        const userData = {
            name: args.name,
            email: args.email,
            pictureURL: args.pictureURL,
            credits: 3,
        }

        // If Not, Insert new user
        if (!user[0]?.email)
        {
            const newUser = await ctx.db.insert('users',userData )

            return userData
       }

       return user[0]
    }
})