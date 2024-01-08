import { useForm } from "react-hook-form";
import useData from "../Hook/useData";
import { useState } from "react";

const AddMenuForm = () => {
    const { addedPopularList, setAddedPopularList, addedRecommendList, setAddedRecommendList } =
        useData();
    const [id, setId] = useState(0);
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
        const isPopular = data.popular;
        const isRecommended = data.recommended;

        const itemData = {
            Id: id,
            Name: name,
            Price: price,
            ImageUrl: photoUrl,
            IsPopular: isPopular,
            IsRecommended: isRecommended,
        };

        if (itemData.IsPopular === "true") {
            const addedMenu = [...addedPopularList, itemData];
            setAddedPopularList(addedMenu);
            setId(id + 1);
        }
        if (itemData.IsRecommended === "true") {
            const addedMenu = [...addedRecommendList, itemData];
            setAddedRecommendList(addedMenu);
            setId(id + 1);
        }
        reset();
    };

    return (
        <div>
            <div className="px-5 text-textMain space-y-2">
                <p>
                    To add a Popular list put <span className="text-secondary">yes</span> on
                    IsPopular value.
                </p>
                <p>
                    To add a Recommend list put <span className="text-secondary">yes</span> on
                    IsRecommend value.
                </p>
            </div>
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

                        {errors.price && (
                            <span className="text-red-600 mt-1 ml-2">Price is required</span>
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
                        <select
                            className="border py-3 rounded-lg pl-3 input-bordered focus:outline-none"
                            {...register("popular", { required: true })}
                        >
                            <option value="">Is Popular?</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                        {errors.popular && (
                            <span className="text-red-600 mt-1 ml-2">
                                Popular Status is required
                            </span>
                        )}
                    </div>

                    <div className="form-control">
                        <select
                            className="border py-3 rounded-lg pl-3 input-bordered focus:outline-none"
                            {...register("recommended", { required: true })}
                        >
                            <option value="">Is Recommended?</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                        {errors.recommended && (
                            <span className="text-red-600 mt-1 ml-2">
                                Recommended Status is required
                            </span>
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

export default AddMenuForm;
