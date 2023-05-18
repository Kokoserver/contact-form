const FormUnit = ({ formik }) => {
  return (
    <div className='w-6/15 mx-auto space-y-4'>
      <div className='flex flex-col justify-center items-start w-full'>
        <input
          type='text'
          autoComplete='firstname'
          name='firstName'
          id='firstName'
          placeholder='First Name'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
             dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          required
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div style={{ color: "tomato" }}>{formik.errors.firstName}</div>
        ) : null}
      </div>
      <div className='flex flex-col justify-center items-start'>
        <input
          type='text'
          autoComplete='lastname'
          name='lastName'
          id='lastName'
          placeholder='Last Name'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
             dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          required
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div style={{ color: "tomato" }}>{formik.errors.lastName}</div>
        ) : null}
      </div>
      <div className='flex flex-col justify-center items-start'>
        <input
          type='email'
          autoComplete='email'
          name='email'
          id='email'
          placeholder='email'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
             dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          required
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: "tomato" }}>{formik.errors.email}</div>
        ) : null}
      </div>
      <div className='flex flex-col justify-center items-start'>
        <input
          type='text'
          autoComplete='subject'
          name='subject'
          id='subject'
          placeholder='subject'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
             dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          required
          {...formik.getFieldProps("subject")}
        />
        {formik.touched.subject && formik.errors.subject ? (
          <div style={{ color: "tomato" }}>{formik.errors.subject}</div>
        ) : null}
      </div>
      <div className='flex flex-col justify-center items-start'>
        <textarea
          id='message'
          name='message'
          required
          rows='4'
          className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border 
          border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Write your thoughts here...'
          {...formik.getFieldProps("message")}
        ></textarea>

        {formik.touched.message && formik.errors.message ? (
          <div style={{ color: "tomato" }}>{formik.errors.message}</div>
        ) : null}
      </div>
    </div>
  );
};

export default FormUnit;
