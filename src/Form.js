import { Input } from '@material-tailwind/react';
import React, { useMemo, useState } from 'react';
import Notification from './Notification';
import { icons, targetPageTypes, inputs, requiredFields } from './utils/formFields';
import CodeBlock from './CodeBlock';

const Form = () => {
	const [formData, setFormData] = useState(inputs);
	const [selectedIcon, setSelectedIcon] = useState(icons[0].value);
	const [targetPageType, setTargetPageType] = useState(targetPageTypes[0].value);
	const [isCopied, setIsCopied] = useState(false);
    
    // Create the notification object from the form data memoized so it only updates when the form data changes
	const notification = useMemo(() => {
        setIsCopied(false); // Reset the copied state when the notification changes

        const obj = {}
        formData.forEach((field) => {
            if (field !== 'icon' && field !== 'targetPage') {
                obj[field.id] = field.value;
            }
        });
        obj['icon'] = selectedIcon;
        if(targetPageType) {
            obj['targetPage'] = `${targetPageType}-${formData.targetPage || ''}`;
        }
        
        return obj
    }, [formData, selectedIcon, targetPageType]) 

    // Update the form data when the user changes the input
    const onInputChange = (fieldId, value) => {
        setFormData((old) => {
            return old.map((f) => {
                f.value = f.id === fieldId ? value : f.value;
                return f;
            });
        });
    }

	return (
		<div className="container flex flex-col md:flex-row mx-auto gap-12">
			<div className="flex flex-col flex-1 gap-2 ">
				{formData.map((field) => (
                    <Input
                        key={field.id}
                        error={requiredFields.includes(field.id) && !field.value}
                        size="lg"
                        type={field.type}
                        label={field.label}
                        color="black"
                        value={field.value}
                        onChange={e => onInputChange(field.id, e.target.value)}
                    />
				))}
				<div className="container border py-2 px-5">
					<label> Select target page type </label>
					<div className="flex flex-wrap gap-2 my-3">
						{targetPageTypes.map((type, i) => {
							const isChecked = type.value === targetPageType;
							return (
								<label htmlFor={type.value || 'none'} className={`bg-gray-200 px-4 py-3 flex cursor-pointer items-center flex-col border-2  rounded-md text-xs ${isChecked ? 'border-gray-800 bg-white' : ''} focus-within:ring-2 ring-blue-400 ring-offset-1`}>
									<input
										type="radio"
										name="targetPage"
										id={type.value || 'none'}
										className="text-xs w-0 h-0"
										checked={isChecked}
										value={type.value}
										onChange={(e) => setTargetPageType(e.target.value)}
									/>
									<span>{type.label}</span>
								</label>
							);
						})}
					</div>
				</div>
				<div className="container border px-5 py-2">
					<label> Select icon</label>
					<div className="flex flex-wrap gap-6 my-3">
						{icons.map((icon) => {
							const isChecked = icon.value === selectedIcon;
							return (
								<label htmlFor={icon.value} className={`w-24 bg-gray-200 flex cursor-pointer items-center flex-col border-2 p-2 justify-center rounded-md text-xs ${isChecked ? 'border-gray-800 bg-white' : ''} focus-within:ring-2 ring-blue-400 ring-offset-1`}>
									<input
										type="radio"
										name="icon"
										className="w-0 h-0"
										id={icon.value}
										checked={isChecked}
										value={icon.value}
										onChange={(e) => setSelectedIcon(e.target.value)}
									/>
									<img className="w-8" src={process.env.PUBLIC_URL + icon.src} alt={icon.label} />
									<span className="mt-2">{icon.label}</span>
								</label>
							);
						})}
					</div>
				</div>
			</div>
			<div className="flex flex-col flex-1 gap-y-3">
                <span>Preview</span>
                <Notification icon={notification.icon || ''} copy={notification.copy} headline={notification.headline} />
                <span>Code</span>
                <CodeBlock notification={notification} isCopied={isCopied} onClick={() => {
                    navigator.clipboard.writeText(JSON.stringify(notification));
                    setIsCopied(true);
                }} />
			</div>
		</div>
	);
};

export default Form;
