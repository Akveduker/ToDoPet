import nameValidator from '@client-utils/validators/nameValidator/nameValidator';
import FormInput from '@components/FormInput/FormInput';
import useCreateDeskColumn from '@hooks/useCreateDeskColumn';
import PrimaryButton from '@ui/buttons/PrimaryButton/PrimaryButton';
import { FC } from 'react';

interface ICreateDeskColumnFormProps {
  closeModal: () => void;
}

const CreateDeskColumnForm: FC<ICreateDeskColumnFormProps> = ({
  closeModal,
}) => {
  const [
    {
      formState: { errors },
      register,
    },
    ,
    submit,
  ] = useCreateDeskColumn(closeModal);
  const { name } = errors;
  return (
    <div>
      <form onSubmit={submit()}>
        <FormInput
          inputTitle="Название"
          {...register('name', nameValidator)}
          error={name}
        />
        <div className="flex mt-3">
          <PrimaryButton type="submit" styleType="small">
            Создать
          </PrimaryButton>
          <div className="ml-2">
            <PrimaryButton
              type="button"
              onClick={closeModal}
              styleType="small"
              className="px-5"
            >
              X
            </PrimaryButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateDeskColumnForm;
