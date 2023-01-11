import Fastify from 'fastify'; 

async function start() {
    try {
        //initialize fastify
        const fastify = Fastify({logger: true});

        fastify.get('/api', async (request, reply) => {
            return {success: true}
        });

        const addr = await fastify.listen({
            port: '8080'
        })
        console.log(`listening on ${addr}`);
    } catch (error) {
        //prints error
        console.error(error);
        //exits the program with error code
        process.exit(1);
    }
}

start();