import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProvider";


const useClasses = () => {
    const { user, loading } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');


    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`https://summer-camp-server-pi.vercel.app/classes?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
        }
    })
    return [classes, refetch]
};

export default useClasses;