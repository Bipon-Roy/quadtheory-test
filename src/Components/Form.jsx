import { useForm } from "react-hook-form";

const Form = () => {
    const {
        register,
        handleSubmit,
        reset,

        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const name = data.name;
        const price = data.price;
        const photoUrl = data.photoUrl;

        const itemData = { name, price, photoUrl };
        console.log(itemData);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="p-5">
                <div className="flex flex-col space-y-3 ">
                    <div className="form-control">
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            placeholder="Item Name"
                            className="input input-bordered focus:outline-none"
                        />
                        {errors.name && (
                            <span className="text-red-600 mt-1 ml-2">Name is required</span>
                        )}
                    </div>

                    <div className="form-control ">
                        <input
                            type="number"
                            {...register("price", { required: true })}
                            placeholder="Price"
                            className="input input-bordered focus:outline-none"
                        />

                        {errors.hours && (
                            <span className="text-red-600 mt-1 ml-2">Price value is required</span>
                        )}
                    </div>

                    <div className="form-control ">
                        <input
                            type="text"
                            {...register("photoUrl", { required: true })}
                            placeholder="Photo URL"
                            className="input input-bordered focus:outline-none"
                        />

                        {errors.photoUrl && (
                            <span className="text-red-600 mt-1 ml-2">PhotoUrl is required</span>
                        )}
                    </div>
                    <div className="form-control">
                        <input
                            className="bg-secondary py-2 rounded-lg text-white"
                            type="submit"
                            value="Add Item"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;
