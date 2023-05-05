import { useEffect, useState } from "react";
import axios from 'axios';

export const CurrentUserLoader = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() =>{
        (async () => {
            const response = await  axios.get('/current-user');
        }
        )();

        }, []);
}