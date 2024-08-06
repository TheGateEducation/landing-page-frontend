import React from 'react';

interface InputFieldProps {
    children: React.ReactNode;
    type: string;
    placeholder: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ children, type, placeholder, onChange }) => {
    return (
        <label className="block mb-4">
            <span className="block text-lg font-medium text-gray-700">{children}</span>
            <input
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-purple-900 focus:ring-2 focus:ring-customPurple"
            />
        </label>
    );
};

export default InputField;
