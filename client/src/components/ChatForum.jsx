import React, { useState } from 'react';

const ChatForum = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSendMessage = () => {
        if (input.trim() !== '') {
            const newMessage = {
                sender: 'User1', // Replace with the sender's name
                message: input.trim()
            };

            setMessages([...messages, newMessage]);
            setInput('');
        }
    };

    return (
        <div className='flex justify-center flex-col min-h-screen items-center p-5'>
            <div className="flex flex-col gap-5 justify-end items-end p-4">
                <div className="flex flex-col gap-2 justify-end items-end p-4 bg-gray-800 shadow-lg rounded-md w-[560px] h-[500px] overflow-y-auto">
                    {!messages.length && 
                    <div className='flex justify-center items-center text-center'>
                    <span className="text-cyan-700 text-center flex justify-center items-center text-3xl">No messages yet</span>
                    </div>
                    }
                    {messages.map((message, index) => (
                        <div key={index} className="bg-gray-700 p-2 rounded-md">
                            <span className="text-cyan-500">{message.sender}: </span>
                            <span className="text-white">{message.message}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-end items-baseline gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                    className='border-2 w-[500px] border-gray-400 p-2 rounded-lg bg-gray-900 text-start text-white'
                />
                <button className='bg-blue-500 hover:bg-blue-600 transition-all duration-300 ease-in-out p-2 rounded-md text-white' onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatForum;