import { InputButton } from './buttons/input.button';
import { BasicButton } from './buttons/basic.button';
import { Container } from '../../base';

interface FormField {
  type: 'text' | 'email' | 'password';
  placeholder: string;
  name: string;
  required?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
}

interface FormButton {
  label: string;
  variant: 'outlined' | 'primary' | 'minimal';
  size?: 'small' | 'medium' | 'large';
  type?: 'submit' | 'button';
  handleClick: () => void;
  loading?: boolean;
}

interface BasicFormProps {
  fields: FormField[];
  buttons: FormButton[];
  onSubmit?: (formData: { [key: string]: string }) => void;
}

const BasicForm = ({ fields, buttons, onSubmit }: BasicFormProps) => {
  return (
    <Container.Flex gap={16}>
      {fields.map((field, index) => (
        <InputButton
          key={index}
          type={field.type}
          placeholder={field.placeholder}
          name={field.name}
          value={field.value}
          onChangeText={field.onChangeText}
        />
      ))}

      <Container.Flex gap={12} marginTop={20}>
        {buttons.map((button, index) => (
          <BasicButton
            key={index}
            label={button.label}
            variant={button.variant}
            size={button.size}
            loading={button.loading}
            handleClick={button.handleClick}
          />
        ))}
      </Container.Flex>
    </Container.Flex>
  );
};

export { BasicForm };
