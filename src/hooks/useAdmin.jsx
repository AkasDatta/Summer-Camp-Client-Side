import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["admin", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://summer-camp-server-pi.vercel.app/savedusers/admin/${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;


// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";

// const useAdmin = () => {
//     const {user, loading} = useAuth();
//     const [axiosSecure] = useAxiosSecure();
//     // use axios secure with react query
//     const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
//         queryKey: ['isAdmin', user?.email],
//         enabled: !loading,
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/savedusers/admin/${user?.email}`);
//             return res.data.admin;
//         }
//     })
//     return [isAdmin, isAdminLoading]
// }
// export default useAdmin;
