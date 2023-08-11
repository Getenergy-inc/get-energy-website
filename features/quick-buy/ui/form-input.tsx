import React from "react";
interface FormInputProps extends React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement
> {
  label: string
  onchange: (e: string) => void
  isLoading?: boolean
  subInfo?: string
}
function FormInput(props: FormInputProps) {
  const { onchange, isLoading, ...theRest } = props;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = event.currentTarget.value;
    return onchange(value);
  }

  return (
    <div className="w-full">
      <label className="text-sm font-bold">{props.label}</label>
      <input
        {...theRest}
        className="w-full p-2 border-2 rounded-xl"
        onChange={handleChange}
        disabled={isLoading && true}
      />
      {
        props.subInfo &&
        <label className="text-xs text-gray-600">{props.subInfo}</label>
      }
    </div>
  );
}

FormInput.defaultProps = {
  isLoading: false
}

export default FormInput;