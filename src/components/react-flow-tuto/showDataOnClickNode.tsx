export function ShowDataOnClickNode({ node }) {
  return (
    <div>
      <div>
        <h1>Node Data</h1>
        <p>ID: {node.id}</p>
        <p>Data: {node.data}</p>
      </div>
    </div>
  );
}
