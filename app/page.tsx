import Field from '@/src/components/Field/Field';

export default function Home() {
  const field = [
    ['x', 'x', 'x'],
    ['x', 'x', 'x'],
    ['x', 'x', 'x'],
  ];
  return (
    <div>
      <Field field={field} />
    </div>
  );
}
