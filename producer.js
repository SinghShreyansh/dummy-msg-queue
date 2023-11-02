import { Queue } from 'bullmq';

const notificationQueue = new Queue('email-queue',{
    connection:{
        host:"127.0.0.1",
        port:"6379",
    }
});

async function init(){
    const res = await notificationQueue.add("email to singh",{
        email:"shreyansh@gmail.com",
        subject:"Welcome Buddy!",
        body: "Hey Singh, Welcome",
    });
    console.log("Job added to queue",res.id);
}

init();