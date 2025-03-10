


const Courses = ( {course} ) => {
  const { title, description, price, image } = course;

  return (
    <>
      <div className="w-1/4 px-4 py-6 border border-gray-300 rounded-md shadow-md">
        <img src={image} height={150} className="mb-2" />
        <div>
          <h1 className="text-xl text-slate-900 font-medium mb-2">{title}</h1>
          <p className="text-sm text-slate-900 font-light mb-2">
            {description}
          </p>
          <div className="text-end">
            <span className="">{price}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
