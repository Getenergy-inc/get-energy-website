import React from "react";
interface FormInputProps extends React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement
> {
  label: string
  data?: { title: string, value: string }[]
  onchange: (e: string) => void
  isLoading?: boolean
  subInfo?: string
}
function FormSelect(props: FormInputProps) {
  const { onchange, isLoading, subInfo, ...theRest } = props;
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const value = event.currentTarget.value;
    return onchange(value);
  }

  return (
    <div className="w-full">
      <label className="text-sm font-bold">{props.label}</label>
      <select
        {...theRest}
        className="w-full p-[11.2px] border-2 rounded-xl"
        onChange={handleChange}
        disabled={isLoading && true}
      >
        <option value="">
          {props.placeholder ? props.placeholder : "Choose an option"}
        </option>
        {props.data && props.data.map((item, idx) => (
          <option key={idx} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>
      {
        props.subInfo &&
        <label className="text-xs text-gray-600">{props.subInfo}</label>
      }
    </div>
  );
}

FormSelect.defaultProps = {
  isLoading: false,
  data: []
}

export default FormSelect;