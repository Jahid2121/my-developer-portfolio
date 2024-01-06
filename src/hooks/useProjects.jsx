import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProjects = () => {
    const axiosPublic = useAxiosPublic()
  const {isPending, isError, error, data: projects } = useQuery({
    queryKey: ['projects'],queryFn: async () => {
        const res = await axiosPublic.get('/projects')
        return res.data;
    }
  })

  return {isPending, isError, error, projects}
};

export default useProjects;