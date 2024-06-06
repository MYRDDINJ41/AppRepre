import { useState, useEffect } from "react";

export function useLoginPost (url) {
    
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    
    const login = async (e) => {
        e.prevenDefault();
        try {
            const res = await fetch (url ,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({user, pass}),
            });
            if (res.ok) {
                console.log(res);
            }
        } catch (error) {
            
        }
    }


    return {}
}