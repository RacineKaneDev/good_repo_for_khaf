import React, { useEffect, useState } from 'react'
import SockJS from 'sockjs-client';
import { addNotification } from '../Redux/Notification/Action';
import { useDispatch } from 'react-redux';
import Stomp from "stompjs";

const useNotificationWebsoket = (userId, type) => {
    
    const dispatch = useDispatch();
    const [stompClient, setStompClient] = useState(null);

    useEffect(() => {
        if (!userId) return;

        const sock = new SockJS("http://localhost:5000/api/notifications/ws"); // URL might need adjustment based on gateway
        const stomp = Stomp.over(sock);
        setStompClient(stomp);
    }, [userId]);

    useEffect(() => {
        if (stompClient) {
            stompClient.connect(
                {},
                () => {
                    // Subscribe to valid topics
                    stompClient.subscribe(
                        `/notification/${type}/${userId}`,
                        onMessageRecive,
                        (error) => {
                            console.error("Subscription error:", error);
                        }
                    );
                    console.log("Subscribed to notifications for user ID:", userId);
                },
                (error) => {
                    console.error("WebSocket error:", error);
                }
            );
        }

        return () => {
            if (stompClient?.connected) {
                stompClient.disconnect(() => {
                    console.log("Disconnected from WebSocket");
                });
            }
        };
    }, [stompClient, userId, type]);

    const onMessageRecive = (payload) => {
        console.log("New message received", payload);
        const receivedMessage = JSON.parse(payload.body);
        
        // Dispatch to Redux
        dispatch(addNotification(receivedMessage)); 
    };
}

export default useNotificationWebsoket;
