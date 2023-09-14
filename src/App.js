import { useState } from 'react';
import FormField from './FormField';
import { Button, Typography, Radio } from '@material-tailwind/react';

function App() {
  const initialData = {
    id: 'testNotification3',
    icon: 'icon-snk-birthday-gift',
    headline: 'This is the notification headline',
    copy: "Get yours before it's too late!",
    customerGroup: 'Everyone',
    endDate: '',
    targetPage: 'pid-333',
  };
  const [data, setData] = useState(initialData);
  const [id, setId] = useState(initialData.id);
  const [headline, setHeadline] = useState(initialData.headline);
  const [copy, setCopy] = useState(initialData.copy);
  const [icon, setIcon] = useState(initialData.icon);
  const [customerGroup, setCustomerGroup] = useState(initialData.customerGroup);
  const [endDate, setEndDate] = useState(initialData.endDate);
  const [targetPageType, setTargetPageType] = useState('pid');
  const [targetPageValue, setTargetPageValue] = useState('333');

  const onChangeId = (newId) => {
    setId(newId);
  };

  const onChangeHeadline = (newHeadline) => {
    setHeadline(newHeadline);
  };

  const onChangeCopy = (newCopy) => {
    setCopy(newCopy);
  };

  const onChangeCustomerGroup = (newCustomerGroup) => {
    setCustomerGroup(newCustomerGroup);
  };

  const onChangeTargetPageValue = (newTargetPageValue) => {
    setTargetPageValue(newTargetPageValue);
  };

  const onChangeTargetPageType = (e) => {
    setTargetPageType(e.target.value);
  };

  const onChangeIcon = (e) => {
    const iconClass = `icon-snk-${e.target.value}`;
    setIcon(iconClass);
  };

  const onChangeEndDate = (newEndDate) => {
    setEndDate(newEndDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      ...data,
      id: id,
      headline: headline,
      icon: icon,
      copy: copy,
      customerGroup: customerGroup,
      endDate: endDate,
      targetPage: `${targetPageType}-${targetPageValue}`,
    };
    setData(updatedData);
  };

  return (
    <div className="bg-stark mx-auto pb-12">
      <Typography className="mt-0 text-center pt-12 pb-6" variant="h1">
        Space NK Global Notification Maker
      </Typography>

      {/* Output Block */}
      <div className="mx-12 my-6">
        <p className="text-lg font-medium">Output Data</p>
        <div className="font-mono mx-12 my-4 bg-gray-500 p-4 text-white">
          {JSON.stringify(data)}
        </div>
      </div>

      <form className="mx-12 mt-4" onSubmit={handleSubmit}>
        {/* ID */}
        <FormField
          placeholder={id}
          label="ID"
          type="text"
          onChange={onChangeId}
        />

        {/* Headline */}
        <FormField
          placeholder={headline}
          label="Headline"
          type="text"
          onChange={onChangeHeadline}
        />

        {/* Copy */}
        <FormField
          placeholder={copy}
          label="Copy"
          type="text"
          onChange={onChangeCopy}
        />

        {/* Icon */}
        <div className="flex flex-col gap-10 justify-center items-center mb-12">
          <div className="flex">
            <Radio
              name="icon"
              label="Advent"
              value="advent-notification"
              onChange={onChangeIcon}
            />
            <img
              className="ml-3 w-12"
              src={process.env.PUBLIC_URL + '/images/advent-notification.svg'}
              alt="Advent"
            />
          </div>
          <div className="flex">
            <Radio
              name="icon"
              label="Birthday"
              value="birthday-gift"
              onChange={onChangeIcon}
            />
            <img
              className="ml-3 w-12"
              src={process.env.PUBLIC_URL + '/images/birthday-gift.svg'}
              value="birthday-gift"
              alt="Birthday"
            />
          </div>
          <div className="flex">
            <Radio
              name="icon"
              label="Limitless"
              value="limitless-notification"
              onChange={onChangeIcon}
            />
            <img
              className="ml-3 w-12"
              src={
                process.env.PUBLIC_URL + '/images/limitless-notification.svg'
              }
              alt="Limitless"
            />
          </div>
          <div className="flex">
            <Radio
              name="icon"
              label="Matches"
              value="matches-notification"
              onChange={onChangeIcon}
            />
            <img
              className="ml-3 w-12"
              src={process.env.PUBLIC_URL + '/images/matches-notification.svg'}
              alt="Matches"
            />
          </div>
        </div>

        {/* Customer Group */}
        <FormField
          placeholder={customerGroup}
          label="Customer Group"
          type="text"
          onChange={onChangeCustomerGroup}
        />

        {/* End Date */}
        <FormField
          placeholder={endDate}
          label="End Date"
          type="datetime-local"
          onChange={onChangeEndDate}
        />

        {/* Target Page */}
        <div class="relative h-10 w-72 min-w-[200px] mx-auto mb-4">
          <select
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            onChange={onChangeTargetPageType}
          >
            <option value="pid">Product</option>
            <option value="cid">Content</option>
            <option value="fdid">Folder</option>
            <option value="cgid">Category</option>
            <option value="cont">Controller</option>
            <option value="url">Full URL</option>
            <option value="none">None</option>
          </select>
          <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Select a Target Page Type
          </label>
        </div>
        <FormField
          placeholder={targetPageValue}
          label="Value"
          type="text"
          onChange={onChangeTargetPageValue}
        />

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button type="submit" color="red" variant="filled">
            Generate
          </Button>
        </div>
      </form>
    </div>
  );
}

export default App;
