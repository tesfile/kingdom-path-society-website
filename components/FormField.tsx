type FormInputProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

type FormTextAreaProps = {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
};

type FormSelectProps = {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
};

export function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  required = false
}: FormInputProps) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      <input
        className="field-input"
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
}

export function FormTextArea({
  label,
  name,
  placeholder,
  rows = 5,
  required = false
}: FormTextAreaProps) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      <textarea
        className="field-input min-h-32 resize-y"
        name={name}
        placeholder={placeholder}
        rows={rows}
        required={required}
      />
    </label>
  );
}

export function FormSelect({ label, name, options, required = false }: FormSelectProps) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      <select className="field-input" name={name} required={required} defaultValue="">
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
