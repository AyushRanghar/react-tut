import { useLoaderData } from "react-router-dom";

interface GithubData {
  followers: number;
  avatar_url: string;
}

const Github = () => {
  const data = useLoaderData() as GithubData;

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers: {data?.followers}
      <img src={data?.avatar_url} alt="Git Pic" width={300} />
    </div>
  );
};

export default Github;
