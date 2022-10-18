const Form = () => {
  return (
    <form className="w-full mx-auto space-y-10">
      <div className="space-y-6">
        <div className="flex flex-col justify-between space-y-3">
          <label htmlFor="city" className="text-gray-700 font-bold uppercase">
            City
          </label>
          <input
            id="city"
            type="text"
            name="city"
            className="bg-gray-50 rounded-lg border-transparent appearance-none border border-gray-300 py-2 px-4 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            placeholder="Colima"
          />
        </div>
        <div className="flex flex-col justify-between space-y-3">
          <label
            htmlFor="country"
            className="text-gray-700 font-bold uppercase"
          >
            Country
          </label>
          <select
            id="country"
            name="county"
            className="bg-gray-50 rounded-lg border-transparent appearance-none border border-gray-300 py-2 px-4 text-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          >
            <option value="">-- Select a country --</option>
            <option value="US">United States</option>
            <option value="MX">Mexico</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">Spain</option>
            <option value="PE">Peru</option>
          </select>
        </div>
      </div>
      <input
        type="submit"
        value="Check weather"
        className="py-2 px-4 w-full uppercase bg-cyan-500 hover:bg-cyan-600 focus:ring-cyan-400 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer"
      />
    </form>
  );
};

export default Form;
