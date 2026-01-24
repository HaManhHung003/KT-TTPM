const amqp = require('amqplib');

async function sendManyMessages() {
    try {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        const queue = 'order_queue';

        await channel.assertQueue(queue, { durable: false });

        for (let i = 1; i <= 100; i++) {
            const msg = JSON.stringify({
                id: i,
                content: `Đơn hàng số ${i}`,
                timestamp: new Date()
            });
            
            channel.sendToQueue(queue, Buffer.from(msg));
            console.log(` [x] Đã gửi: ${msg}`);
        }

        // Đợi một chút để đảm bảo tin đã đi hết trước khi đóng kết nối
        setTimeout(() => {
            connection.close();
            process.exit(0);
        }, 500);

    } catch (error) {
        console.error("Lỗi:", error);
    }
}

sendManyMessages();