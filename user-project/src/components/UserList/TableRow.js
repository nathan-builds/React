const TableRow = (props) => {
  const rowClickHandler = () => {
    props.removeUserFromList({
      userName: props.userName,
    });
  };

  return (
    <tr onClick={rowClickHandler}>
      <td>{props.userID}</td>
      <td>{props.userName}</td>
      <td>{props.userAge}</td>
    </tr>
  );
};

export default TableRow;
