const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Full Name</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Joined</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.fullname}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.joined}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
