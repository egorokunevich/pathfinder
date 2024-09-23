interface FieldProps {
  field: string[][];
}

const Field = ({ field }: FieldProps) => {
  const createField = () => {
    return field.map((row) => {
      return (
        <tr>
          {row.map((el) => {
            return <td>{el}</td>;
          })}
        </tr>
      );
    });
  };

  return <div>{createField()}</div>;
};

export default Field;
