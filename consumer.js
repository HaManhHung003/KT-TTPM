const amqp = require('amqplib');

async function receiveMail() {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    const queue = 'order_queue';

    await channel.assertQueue(queue, { durable: false });
    
    // Giới hạn: Mỗi lần chỉ nhận 1 tin để xử lý xong mới lấy tin tiếp theo
    channel.prefetch(1); 

    console.log(" [*] Đang chờ xử lý các đơn hàng...");

    channel.consume(queue, (msg) => {
        const data = JSON.parse(msg.content.toString());
        console.log(` [x] Đang xử lý đơn hàng ID: ${data.id}`);
        
        // Giả lập xử lý mất 1 giây
        setTimeout(() => {
            console.log(` [v] Hoàn thành đơn ${data.id}`);
            channel.ack(msg); // Xác nhận đã xong
        }, 1000);
    }, { noAck: false }); // Quan trọng: Bật chế độ xác nhận tin nhắn
}
receiveMail();