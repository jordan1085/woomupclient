import { useQuery, gql } from "@apollo/client";

const GET_MATCHS = gql`
  query allMatch($id: ID!){
    getMatchesNetworking(id: $id){
      name
    }
    getMatchesGuidesSameCompany(id: $id){
      name
    }
    getMatchesMentoring(id: $id){
      name
    }
    getInternalCompanyMentoring(id: $id){
      name
    }
  }
`;

const MatchDashboard = ({ user }) => {
  
  const { id } = user;
  
  const { data, loading, error } = useQuery(GET_MATCHS, {
    variables: { id }
  })
  
  if (loading) return null;
  if (error) return `Error! ${error.message}`;

  return (
    <>
      {(data.getMatchesNetworking ?
        <div className="flex-initial mr-5">
          <table className="shadow-md mt-5 w-44">
            <thead className="bg-pink-900">
              <tr className="text-white">
                <th className="w-1/1 py-2">Networking</th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {data.getMatchesNetworking.map((match, i) => (
                <tr key={i}>
                  <td className="border px-4 py-2">
                    {match.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        : null)}

      {(data.getMatchesGuidesSameCompany ?
        <div className="flex-initial mr-5">
          <table className="shadow-md mt-5 w-44">
            <thead className="bg-pink-900">
              <tr className="text-white">
                <th className="w-1/1 py-2">Interno Empresa</th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {data.getMatchesGuidesSameCompany.map((match, i) => (
                <tr key={i}>
                  <td className="border px-4 py-2">
                    {match.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        : null)}

      {(data.getMatchesMentoring ?
        <div className="flex-initial mr-5">
          <table className="shadow-md mt-5 w-44">
            <thead className="bg-pink-900">
              <tr className="text-white">
                <th className="w-1/1 py-2">Mentorias</th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {data.getMatchesMentoring.map((match, i) => (
                <tr key={i}>
                  <td className="border px-4 py-2">
                    {match.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        : null)}

      {(data.getInternalCompanyMentoring ?
        <div className="flex-initial mr-5">
          <table className="shadow-md mt-5 w-44">
            <thead className="bg-pink-900">
              <tr className="text-white">
                <th className="w-1/1 py-2">Mentoria Interna</th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {data.getInternalCompanyMentoring.map((match, i) => (
                <tr key={i}>
                  <td className="border px-4 py-2">
                    {match.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        : null)}
    </>
  );
}

export default MatchDashboard;
