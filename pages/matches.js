import Layout from "../components/Layout";
import { useQuery, gql } from "@apollo/client";
import MatchDashboard from '../components/MatchDashboard';
import { useState } from "react";

// Consulta utilizando graphql
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

const Matches = () => {

  // useQuery es un hook propio de apollo client que retorna el resultado de la consulta
  const { data, loading, error } = useQuery(GET_USER);
  const [user, setUser] = useState('');

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <Layout>
        <div className="flex">
          <div className="flex-initial mr-5">
            <table className="shadow-md mt-5">
              <thead className="bg-pink-900">
                <tr className="text-white">
                  <th className="w-1/1 py-2">Usuarias</th>
                  <th className="w-1/1 py-2">Rol</th>
                </tr>
              </thead>

              <tbody className="bg-white">
                {data.getUsers.map(user => (
                  <tr key={user.id}>
                    <td className="border p-1">
                      <button
                        className="w-32 focus:bg-indigo-900 bg-indigo-500 hover:bg-indigo-900 text-white font-bold p-1 rounded"
                        onClick={() => setUser(user)}
                      >
                        {user.name}
                      </button>
                    </td>
                    <td className="border p-1">
                      {user.roles}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {(user ? <MatchDashboard user={user}/> : <h2 className="mt-5">Selecciona un usuario de la lista</h2>)}
        </div>
      </Layout>
    </div>
  );
}

export default Matches;