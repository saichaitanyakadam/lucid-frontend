/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const RecordsForm = ({ recordValue, hostedZoneId, handleCancel }) => {
  const {
    setValue,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (recordValue) {
      setValue("recordType", recordValue.Type);
      setValue("name", recordValue.Name);
      setValue("ttl", recordValue.TTL);
    }
  }, [setValue, recordValue]);

  const submitForm = async (values) => {
    try {
      await axios.post(
        `https://lucid-backend.onrender.com/api/domain/action/${hostedZoneId}`,
        {
          type: values.type.toUpperCase(),
          recordType: values.recordType,
          recordName: values.name,
          recordValue: values.recordValue,
        }
      );
      handleCancel();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="w-[80%] md:w-[60%] lg:w-[30%] flex flex-col p-5 shadow-xl gap-3"
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="flex flex-col">
        <label htmlFor="type">Action Type</label>
        <select
          name="type"
          id="type"
          className="h-8 border border-gray-300"
          {...register("type", { required: true })}
        >
          <option className="hidden" defaultValue="">
            Select
          </option>
          <option value="CREATE">Create</option>
          <option value="UPSERT">Update</option>
          <option value="DELETE">Delete</option>
        </select>
        {errors.type && <p className="text-red-500">Select Value</p>}
      </div>
      <div className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          {...register("name", { required: true })}
          type="text"
          name="name"
          id="name"
          className="border border-r-gray-300 h-8 outline-none"
        />
        {errors.name && <p className="text-red-500">Select Name</p>}
      </div>
      <div className="flex flex-col">
        <label htmlFor="recordType">Record Type</label>
        <select
          name="recordType"
          id="recordType"
          {...register("recordType", { required: true })}
          className="h-8 border border-gray-300"
        >
          <option value="A">A</option>
          <option value="AAAA">AAAA</option>
          <option value="CNAME">CNAME</option>
          <option value="MX">MX</option>
          <option value="NS">NS</option>
          <option value="PTR">PTR</option>
          <option value="SOA">SOA</option>
          <option value="SRV">SRV</option>
          <option value="TXT">TXT</option>
          <option value="DNSSEC">DNSSEC</option>
        </select>
        {errors.recordType && (
          <p className="text-red-500">Select Record Type</p>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="ttl">TTL</label>
        <input
          type="number"
          name="ttl"
          id="ttl"
          {...register("ttl", { required: true })}
          className="border border-r-gray-300 h-8 outline-none"
        />
      </div>
      <div className="flex flex-col relative">
        <label htmlFor="recordValue">Add Record</label>
        <input
          type="text"
          {...register("recordValue", { required: true })}
          name="recordValue"
          placeholder="Enter Record Resource Value"
          id="recordValue"
          className="border border-r-gray-300 h-8 outline-none"
        />
        {errors.recordValue && (
          <p className="text-red-500">Select Record Value</p>
        )}
      </div>
      <div className="flex justify-end items-center gap-2">
        <button
          type="button"
          onClick={() => {
            handleCancel();
          }}
          className="bg-red-400 h-6 px-3 text-white rounded self-end  top-7 right-1"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-400 h-6 px-3 text-white rounded self-end top-7 right-1"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default RecordsForm;
