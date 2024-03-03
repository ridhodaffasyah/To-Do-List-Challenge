import Select, { components } from 'react-select';
import { useState } from 'react';

type PriorityOption = {
  value: string;
  label: string;
  color: string;
};

const options: PriorityOption[] = [
  { value: 'low', label: 'Low', color: 'green' },
  { value: 'medium', label: 'Medium', color: 'yellow' },
  { value: 'high', label: 'High', color: 'red' },
];

const Option = (props: any) => (
  <components.Option {...props}>
    <div style={{ display: 'flex', alignItems: 'center', padding: '5px 10px'}}>
      <div
        style={{
          width: '15px',
          height: '15px',
          backgroundColor: props.data.color,
          borderRadius: '50%',
          marginRight: '8px',
        }}
      />
      {props.data.label}
    </div>
  </components.Option>
);

const CustomSelect = () => {
  const [selectedOption, setSelectedOption] = useState<PriorityOption | null>(null);

  const handleChange = (selectedOption: any) => {
    console.log(`Option selected:`, selectedOption);
    setSelectedOption(selectedOption);
  };

  const Control = (props: any) => {
    return (
      <components.Control {...props}>
        {selectedOption && (
          <div style={{ display: 'flex', alignItems: 'center', padding: '5px 10px' }}>
            <div
              style={{
                width: '15px',
                height: '15px',
                backgroundColor: selectedOption.color,
                borderRadius: '50%',
                marginRight: '8px',
              }}
            />
            {selectedOption.label}
          </div>
        )}
        <components.DropdownIndicator {...props} />
      </components.Control>
    );
  };

  // Set the defaultValue dynamically based on the selected option
  const defaultValue = selectedOption ? selectedOption : options[0];

  return (
    <Select
      options={options}
      onChange={handleChange}
      components={{ Option, Control }}
      defaultValue={defaultValue}
    />
  );
};

export default CustomSelect;
