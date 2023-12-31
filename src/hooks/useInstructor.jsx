import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProvider";

const useInstructor = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery(
    ["isInstructor", user?.email],
    async () => {
      const res = await fetch(
        `https://summer-camp-server-pi.vercel.app/users/instructor/${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return res.json();
    }
  );
  return [isInstructor, isInstructorLoading];
};

export default useInstructor;



// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";

// const useInstructor = () => {
//     const {user, loading} = useAuth();
//     const [axiosSecure] = useAxiosSecure();
//     // use axios secure with react query
//     const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
//         queryKey: ['isInstructor', user?.email],
//         enabled: !loading,
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/savedusers/instructor/${user?.email}`);
//             return res.data.instructor;
//         }
//     })
//     return [isInstructor, isInstructorLoading]
// }
// export default useInstructor;
