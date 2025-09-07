import { InputButton } from './buttons/input.button';

const BasicForm = () => {
  interface BasicFormProps {
    type?: 'login' | 'register';
    onSubmit?: (formData: { [key: string]: string }) => void;
  }
  return (
    <>
      <InputButton type="text" placeholder="Username" />
      <InputButton type="email" placeholder="e-mail" />
    </>
  );
};

export { BasicForm };
