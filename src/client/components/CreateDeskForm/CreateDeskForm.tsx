import FormInput from '@components/FormInput/FormInput';
import useCreateDesk from '@hooks/useCreateDesk';
import SmallModal from '@ui/Modals/SmallModal/SmallModal';
import PrimaryButton from '@ui/buttons/PrimaryButton/PrimaryButton';
import TextError from '@ui/errors/TextError/TextError';
import { FC } from 'react';

interface ICreateDeskFormProps {
  isOpen: boolean;
  closeModal: () => void;
}

const CreateDeskForm: FC<ICreateDeskFormProps> = ({ isOpen, closeModal }) => {
  const [
    {
      formState: { errors },
      register,
    },
    submit,
    { isError },
  ] = useCreateDesk(closeModal);
  const { name } = errors;

  return (
    <SmallModal isOpen={isOpen} onRequestClose={closeModal}>
      <form onSubmit={submit()}>
        <FormInput
          error={name}
          inputTitle="Название"
          {...register('name', {
            required: 'Обязательное поле',
            minLength: {
              value: 2,
              message: 'Имя слишком короткое',
            },
            maxLength: {
              value: 20,
              message: 'Имя слишком длинное',
            },
          })}
          placeholder="Название доски"
        />
        {isError && (
          <div className="mt-3">
            <TextError>Произошла ошибка</TextError>
          </div>
        )}
        <div className="mt-3">
          <PrimaryButton>Создать</PrimaryButton>
        </div>
      </form>
    </SmallModal>
  );
};

export default CreateDeskForm;
