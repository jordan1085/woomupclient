import Layout from "../components/Layout";
import { useQuery, gql } from "@apollo/client";

const GET_USER = gql`
  query getUsers {
    getUsers {
      id
      name
      roles
      enterprises
    }
  }
`;

export default function Home() {

  const { data, loading, error } = useQuery(GET_USER);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <Layout>
        <table className="table-auto shadow-md mt-5 w-full w-lg">
          <thead className="bg-pink-900">
            <tr className="text-white">
              <th className="w-1/5 py-2">Nombre</th>
              <th className="w-1/5 py-2">Rol</th>
              <th className="w-1/5 py-2">Empresa</th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {data.getUsers.map(user => (
              <tr key={user.id}>
                <td className="border px-4 py-2">
                  {user.name}
                </td>
                <td className="border px-4 py-2">
                  {user.roles}
                </td>
                <td className="border px-4 py-2">
                  {user.enterprises}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Layout>
    </div>
  )
}
