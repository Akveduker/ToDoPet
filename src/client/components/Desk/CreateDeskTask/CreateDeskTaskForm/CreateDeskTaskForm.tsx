import nameValidator from '@client-utils/validators/nameValidator/nameValidator';
import FormInput from '@components/FormInput/FormInput';
import useCreateDeskTask from '@hooks/useCreateDeskTask';
import PrimaryButton from '@ui/buttons/PrimaryButton/PrimaryButton';
import { FC } from 'react';

interface ICreateDeskTaskFormProps {
  closeModal: () => void;
  columnId: string;
}

const CreateDeskTaskForm: FC<ICreateDeskTaskFormProps> = ({
  closeModal,
  columnId,
}) => {
  const [
    {
      register,
      formState: { errors },
    },
    ,
    submit,
  ] = useCreateDeskTask(columnId, closeModal);
  const { name } = errors;
  return (
    <div>
      <form onSubmit={submit()}>
        <FormInput
          inputTitle={'Название'}
          {...register('name', nameValidator)}
          error={name}
        />
        <div className="flex mt-3">
          <PrimaryButton styleType="small">Создать</PrimaryButton>
          <div className="ml-2">
            <PrimaryButton
              styleType="small"
              type="button"
              onClick={closeModal}
              className="px-5"
            >
              Х
            </PrimaryButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateDeskTaskForm;
