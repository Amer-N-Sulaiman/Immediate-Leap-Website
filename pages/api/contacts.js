import { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler (req, res) {
  if (req.method == 'POST') {
        
    
        const data = req.body.data;
        console.log('1')
        if (data.userId==undefined){
            console.log('data', data)
            const newUser = await addUser() 
            data.userId = newUser.id
        }
        
        // return res.status(200).send('reached here: '+ req.body.name);
        const newRequest = await addRequest(data)
        return res.status(200).json(newRequest);
       
  } else {
        return res.status(405).json({ message: 'Method not allowed' });
  }

  
};

async function addUser(){
    try{
        
        const user = await prisma.user.create({data: {}})
        return user
    } catch (error) {
        console.error('Error creating user:', error);
    } finally {
        await prisma.$disconnect();
    }
    
    
      
}

async function addRequest(data){
    
    try{
        
        const user = await prisma.request.create({data: {
            name: data.name,
            email: data.email,
            service: data.service,
            agencyurl: data.agencyUrl,
            userId: data.userId
        }})
        return user
    } catch (error) {
        console.error('Error creating user:', error);
    } finally {
        await prisma.$disconnect();
    }
    
    return user
}