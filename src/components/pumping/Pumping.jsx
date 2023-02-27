import Table from "./Table.jsx";

function Pumping(props) {
  console.log(props.serverURL);
  return (
    <div>
      <Table serverURL={props.serverURL} />
    </div>
  );
}

export default Pumping;
